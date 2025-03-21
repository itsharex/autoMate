<div align="center"><a name="readme-top"></a>

<img src="./resources/logo.png" width="120" height="120" alt="autoMate logo">
<h1>autoMate</h1>
<p><b>🤖 AI駆動のローカルオートメーションツール | コンピュータに仕事をさせる</b></p>

[English](./README.md) | [简体中文](./README_CN.md)

>"面倒な作業を自動化し、生活のための時間を取り戻す"


https://github.com/user-attachments/assets/bf27f8bd-136b-402e-bc7d-994b99bcc368



</div>

## 💫 コンピュータとの関係を再定義する

繰り返しの作業に夜遅くまで取り組むのに疲れましたか？単調な作業があなたの創造力と貴重な時間を消費していませんか？

autoMateは単なるツールではありません。AGI時代のインテリジェントなデジタル同僚であり、仕事と生活のバランスを取り戻すために絶え間なく働きます。

**オートメーションがあなたの生活にもっと多くの可能性をもたらします。**

## 💡 プロジェクト概要
autoMateは、OmniParserを基盤とした革新的なAI+RPAオートメーションツールで、AIを「デジタル従業員」に変え、以下のことができます：

- 📊 コンピュータのインターフェースを自動的に操作し、複雑なワークフローを完了する
- 🔍 画面の内容をインテリジェントに理解し、人間の視覚と操作をシミュレートする
- 🧠 タスクの要件に基づいて自律的に意思決定し、行動を取る
- 💻 ローカルデプロイメントをサポートし、データのセキュリティとプライバシーを保護する

従来のRPAツールの複雑なルール設定とは異なり、autoMateは自然言語のタスク記述だけで複雑なオートメーションプロセスを完了します。繰り返しの作業に別れを告げ、真に価値を生み出すことに集中しましょう！

## 🌟 autoMateがあなたの仕事を変える理由

> "autoMateを使用する前は、毎日3時間かけてレポートを処理していました。今ではタスクを設定するのに10分しかかからず、本当に重要なことに集中できます。" - 財務マネージャーのフィードバック。

autoMateがあなたの時間を何時間も占めていたタスクを自動的に完了するのを初めて見たとき、言葉にできない安堵感を感じるでしょう。これは単なる効率の向上ではなく、創造力の解放です。

想像してみてください：毎朝目覚めると、昨夜のデータ整理、レポート生成、メール返信がすべて完了しており、あなたの知恵と創造力を本当に必要とする仕事だけが残っています。これがautoMateがもたらす未来です。

## ✨ 機能

- 🔮 コード不要のオートメーション - タスクを自然言語で記述し、プログラミング知識は不要
- 🖥️ フルインターフェースコントロール - 特定のソフトウェアに限定されず、あらゆるビジュアルインターフェースの操作をサポート
- 🚅 簡素化されたインストール - 公式バージョンと比較して簡素化されたインストールプロセス、中国語環境をサポートし、ワンクリックでデプロイ
- 🔒 ローカル操作 - データのセキュリティを保護し、プライバシーの懸念なし
- 🌐 マルチモデルサポート - 主流の大規模言語モデルと互換性あり
- 💎 継続的な成長 - 使用するにつれて、あなたの作業習慣とニーズに適応し学習

## 🚀 クイックスタート

### 📦 インストール
プロジェクトをクローンし、環境を設定します：

```bash
git clone https://github.com/yuruotong1/autoMate.git
cd autoMate
conda create -n "automate" python==3.12
conda activate automate
pip install -r requirements.txt
```
### 🎮 アプリケーションの起動

```bash
python main.py
```
その後、ブラウザで`http://localhost:7888/`を開き、APIキーと基本設定を構成します。

サポートされているベンダーとモデルについては、この[リンク](./SUPPORT_MODEL.md)を参照してください。

## 📝 FAQ

### 🔧 CUDAバージョンの不一致
エラーが表示された場合：「GPUドライバが互換性がありません。readmeに従って適切なtorchバージョンをインストールしてください」と表示された場合、ドライバの互換性がないことを示しています。次のいずれかを行うことができます：

1. CPUのみで実行（遅いが機能する）
2. `pip list`でtorchバージョンを確認
3. [公式サイト](https://pytorch.org/get-started/locally/)でサポートされているCUDAバージョンを確認
4. Nvidiaドライバを再インストール

## 🤝 コントリビュート

優れたオープンソースプロジェクトは、集団の知恵を体現しています。autoMateの成長は、あなたの参加と貢献にかかっています。バグの修正、機能の追加、ドキュメントの改善など、あなたの努力は何千人もの人々が繰り返し作業から解放されるのを助けます。

よりインテリジェントな未来を一緒に創りましょう。

> ["賢い質問の仕方"](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、["オープンソースコミュニティへの質問の仕方"](https://github.com/seajs/seajs/issues/545)、["効果的なバグ報告の仕方"](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs.html)、および["オープンソースプロジェクトに解決できない質問を提出する方法"](https://zhuanlan.zhihu.com/p/25795393)を読むことを強くお勧めします。より良い質問は、より良いサポートを得るのに役立ちます。

<a href="https://github.com/yuruotong1/autoMate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yuruotong1/autoMate" />
</a>

---

<div align="center">
⭐ すべてのスターはクリエイターへの励ましであり、より多くの人々がautoMateを発見し、恩恵を受ける機会です ⭐
今日のあなたのサポートが、私たちの明日の原動力です
</div>
