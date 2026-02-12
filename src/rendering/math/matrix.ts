import { Vector3 } from "./vector";

export class Matrix4 {
  private data: number[];

  constructor() {
    this.data = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }

  static identity(): Matrix4 {
    return new Matrix4();
  }

  static perspective(
    fov: number,
    aspect: number,
    near: number,
    far: number,
  ): Matrix4 {
    const matrix = new Matrix4();
    const f = 1.0 / Math.tan(fov / 2);
    const rangeInv = 1 / (near - far);

    matrix.data[0] = f / aspect;
    matrix.data[5] = f;
    matrix.data[10] = (near + far) * rangeInv;
    matrix.data[11] = -1;
    matrix.data[14] = near * far * rangeInv * 2;
    matrix.data[15] = 0;

    return matrix;
  }

  static lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4 {
    const zAxis = eye.subtract(target).normalize();
    const xAxis = up.cross(zAxis).normalize();
    const yAxis = zAxis.cross(xAxis);

    const matrix = new Matrix4();
    matrix.data[0] = xAxis.x;
    matrix.data[1] = yAxis.x;
    matrix.data[2] = zAxis.x;
    matrix.data[4] = xAxis.y;
    matrix.data[5] = yAxis.y;
    matrix.data[6] = zAxis.y;
    matrix.data[8] = xAxis.z;
    matrix.data[9] = yAxis.z;
    matrix.data[10] = zAxis.z;
    matrix.data[12] = -xAxis.dot(eye);
    matrix.data[13] = -yAxis.dot(eye);
    matrix.data[14] = -zAxis.dot(eye);

    return matrix;
  }

  multiply(other: Matrix4): Matrix4 {
    const result = new Matrix4();
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result.data[i * 4 + j] =
          this.data[i * 4 + 0] * other.data[0 * 4 + j] +
          this.data[i * 4 + 1] * other.data[1 * 4 + j] +
          this.data[i * 4 + 2] * other.data[2 * 4 + j] +
          this.data[i * 4 + 3] * other.data[3 * 4 + j];
      }
    }
    return result;
  }

  translate(x: number, y: number, z: number): Matrix4 {
    const translation = new Matrix4();
    translation.data[12] = x;
    translation.data[13] = y;
    translation.data[14] = z;
    return this.multiply(translation);
  }

  rotateX(angle: number): Matrix4 {
    const rotation = new Matrix4();
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    rotation.data[5] = c;
    rotation.data[6] = -s;
    rotation.data[9] = s;
    rotation.data[10] = c;
    return this.multiply(rotation);
  }

  rotateY(angle: number): Matrix4 {
    const rotation = new Matrix4();
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    rotation.data[0] = c;
    rotation.data[2] = s;
    rotation.data[8] = -s;
    rotation.data[10] = c;
    return this.multiply(rotation);
  }

  rotateZ(angle: number): Matrix4 {
    const rotation = new Matrix4();
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    rotation.data[0] = c;
    rotation.data[1] = -s;
    rotation.data[4] = s;
    rotation.data[5] = c;
    return this.multiply(rotation);
  }

  scale(x: number, y: number, z: number): Matrix4 {
    const scaling = new Matrix4();
    scaling.data[0] = x;
    scaling.data[5] = y;
    scaling.data[10] = z;
    return this.multiply(scaling);
  }

  toArray(): number[] {
    return [...this.data];
  }
}
