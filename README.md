# Gallery - デジタルアートマーケットプレイス

現代的なWebアーキテクチャを使用したデジタルアート作品の展示・販売プラットフォーム

## 📋 プロジェクト概要

Galleryは、個人アーティストがデジタルアート作品をアップロードし、購入者が作品を発見・購入できるマーケットプレイスです。

### 🎯 MVP機能（現在実装済み）
- ✅ レスポンシブなギャラリー表示
- ✅ 作品カード一覧
- ✅ 基本的なナビゲーション
- ✅ Redux Toolkitによる状態管理

### 🚀 今後の実装予定
- [ ] 作品詳細ページ
- [ ] 検索・フィルタリング機能
- [ ] ユーザー認証（AWS Cognito）
- [ ] 作品アップロード機能
- [ ] 決済システム（Stripe）
- [ ] AWS環境でのデプロイ

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 14** - App Router使用
- **TypeScript** - 型安全性の確保
- **React 18** - UIライブラリ
- **Redux Toolkit** - 状態管理
- **Tailwind CSS** - ユーティリティファーストCSS

### UIコンポーネント（ハイブリッド構成）
- **shadcn/ui** - メインUI（ギャラリー表示、カード等）
- **Material-UI** - 複雑なフォーム、管理画面（今後実装）

### 開発ツール
- **ESLint** - コード品質
- **Prettier** - コードフォーマット

### 将来的なバックエンド（予定）
- **AWS Lambda** - サーバーレス関数
- **Amazon S3** - 画像ストレージ
- **Amazon RDS** - データベース
- **AWS Cognito** - 認証
- **Stripe** - 決済処理

## 🏗️ プロジェクト構造

```
gallery/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # ルートレイアウト
│   │   ├── page.tsx           # ホームページ
│   │   └── globals.css        # グローバルスタイル
│   ├── components/            # 再利用可能コンポーネント
│   │   └── ui/               # shadcn/ui コンポーネント
│   ├── store/                # Redux Toolkit
│   │   ├── index.ts          # Store設定
│   │   ├── hooks.ts          # 型安全なhooks
│   │   └── slices/           # Redux slices
│   │       └── artworkSlice.ts
│   ├── providers/            # Context providers
│   │   └── ReduxProvider.tsx
│   └── lib/                  # ユーティリティ関数
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🚀 セットアップ手順

### 前提条件
- Node.js 20+
- npm または yarn

### 1. プロジェクトクローン
```bash
git clone <repository-url>
cd gallery
```

### 2. 依存関係インストール
```bash
npm install
```

### 3. 開発サーバー起動
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## 📝 利用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# リンター実行
npm run lint

# shadcn/ui コンポーネント追加
npx shadcn-ui@latest add [component-name]
```

## 🎨 shadcn/ui コンポーネント追加方法

新しいUIコンポーネントが必要な場合：

```bash
# 例：Dialog コンポーネントの追加
npx shadcn-ui@latest add dialog

# 複数コンポーネントの追加
npx shadcn-ui@latest add button card badge input
```

## 🗂️ データ構造

### Artwork型定義
```typescript
interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  artist: string;
  category: string;
  createdAt: string;
  tags: string[];
}
```

## 🏛️ アーキテクチャ設計思想

### 状態管理
- **Redux Toolkit** を使用して一元的な状態管理
- 作品データ、フィルター、UI状態を管理
- 型安全なhooksで開発効率を向上

### コンポーネント設計
- **shadcn/ui** でモダンなデザインシステム
- 再利用可能なコンポーネントで保守性を確保
- レスポンシブファーストのアプローチ

### パフォーマンス
- Next.js App Routerによる自動最適化
- 画像の遅延読み込み
- コード分割とプリフェッチ

## 🌐 デプロイ戦略

### フェーズ1: 静的デプロイ（現在）
- Vercel または Netlify
- 静的サイトとしての動作確認

### フェーズ2: AWS フルスタック（予定）
- Next.js → AWS Amplify または Vercel
- バックエンド → AWS Lambda + API Gateway
- データベース → Amazon RDS（PostgreSQL）
- ストレージ → Amazon S3
- CDN → CloudFront

## 🤝 開発ガイドライン

### Git Workflow
```bash
# 機能開発
git checkout -b feature/[feature-name]
git commit -m "feat: add [feature-description]"

# バグ修正
git checkout -b fix/[bug-description]
git commit -m "fix: resolve [bug-description]"
```

### コミットメッセージ規約
- `feat:` 新機能
- `fix:` バグ修正
- `style:` デザイン・スタイリング
- `refactor:` リファクタリング
- `docs:` ドキュメント更新

## 🚧 開発状況

### 完了済み
- [x] プロジェクト初期設定
- [x] Redux Toolkit統合
- [x] 基本レイアウト
- [x] ギャラリー一覧表示

### 進行中
- [ ] 作品詳細ページ

### 今後の予定
- [ ] 検索・フィルタリング
- [ ] 認証システム
- [ ] 管理者機能
- [ ] 決済システム

## 📞 サポート

開発に関する質問や提案があれば、Issueを作成してください。

---

**Last Updated:** 2024年6月16日