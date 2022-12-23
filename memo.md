# メモ

解説和訳や、調べたもののメモ

# 📝 2022/12/23

なお、PDF はテキスト暗号化されており、コピペで翻訳確認ができない 😭

(スライドベタ打ちの機械翻訳するか。。。)

## Part1: Ray Tracing

### 目標

- レンダリングの基本を学ぶ
  - > Learn rendering basics
- パストレーサーを描く
  - > write a path tracer
- ShaderToy 上のGLSL
  - > In GLSL on ShaderToy

### 目標としないこと

- フレームワーク提供(～60行)
  - > Framework provided (~60 lines)
- 提供シーン
  - > Scene provided
- 三角形のみの拡散
  - >  Only diffuse triangles
- テクスチャなし
  - > No textures
- 加速度センサーなし
  - >  No acceleration structures
- 巧みなサンプリング/ノイズ除去を行わない
  - >  No clever sampling/denoising
- GPUはあるが、グラフィックスAPIがない
  - > GPUs but no graphics APIs

### 適切な WebGL の設定

デフォルトでは、ANGLE はWindows 上でWebGL シェーダの実行を遅くします。

[Windows上でANGLEを使って、WebGLレンダリング](https://www.infoq.com/jp/news/2010/03/WebGL-ANGLE/)

memo:

macOS でもChrome に設定あり

`chrome://flags/#use-angle`

```text
Choose ANGLE graphics backend

Choose the graphics backend for ANGLE. The OpenGL backend is soon to be deprecated on Mac, and may contain driver bugs that are not planned to be fixed. The Metal backend is still experimental, and may contain bugs that are still being worked on. The Metal backend should be more performant, but may still be behind the OpenGL backend until fully released. – Mac
```

```text
ANGLEグラフィックスバックエンドを選択する

ANGLEのグラフィックバックエンドを選択します。OpenGLバックエンドは、Macではまもなく非推奨となり、修正される予定のないドライバのバグが含まれている可能性があります。Metal バックエンドはまだ実験的なもので、バグが含まれている可能性があり、現在も修正中です。Metalバックエンドはより高性能になるはずですが、完全にリリースされるまではOpenGLバックエンドに遅れをとる可能性があります。- Mac
```

[WebGL - WEBGL_debug_shadersで変換済みのシェーダーコードを確認する - ICS MEDIA](https://ics.media/web3d-maniacs/webgl_webgl_debug_shaders/)
