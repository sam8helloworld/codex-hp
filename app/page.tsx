import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Code,
  Cpu,
  Globe,
  MessageSquare,
  Workflow,
  CheckCircle,
  Database,
  Chrome,
  Bot,
  LineChart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">CodeX</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              サービス
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:underline underline-offset-4">
              事例
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              プロフィール
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              お問い合わせ
            </Link>
          </nav>
          <Link href="#contact">
            <Button>お問い合わせ</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">CodeX</h1>
                  <p className="text-xl text-muted-foreground">エンジニアリングとプロダクトマネジメントの専門家</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#services">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      サービスを見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/abstract-digital-code.png"
                  alt="CodeX"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">サービス</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  エンジニアリングとプロダクトマネジメントの両面からお客様のビジネスをサポートします
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Cpu className="h-6 w-6 mb-2" />
                  <CardTitle>エンジニアリング</CardTitle>
                  <CardDescription>技術的な課題を解決し、ビジネスの成長を支援します</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span>Webスクレイピング</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Chrome拡張機能開発</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span>Webサービス開発</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      <span>生成AI開発支援</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Workflow className="h-6 w-6 mb-2" />
                  <CardTitle>プロダクトマネジメント</CardTitle>
                  <CardDescription>戦略立案からプロジェクト実行までサポートします</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>プロダクト戦略コンサルティング</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-primary" />
                      <span>プロジェクトマネジメント支援</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>要件定義・仕様策定</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-primary" />
                      <span>チーム構築・マネジメント</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">開発・サポート事例</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  これまでに手がけたプロジェクトの一部をご紹介します
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Chrome className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>ECサイト向けChrome拡張機能</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">大手ECサイトでの商品情報収集を効率化するChrome拡張機能を開発しました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>商品データの自動収集と分析機能を実装</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>データをCSV形式でエクスポート可能</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>作業時間を約70%削減</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Database className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>不動産データ収集システム</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">不動産会社向けに物件情報を自動収集するスクレイピングシステムを構築しました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>複数サイトから物件データを定期収集</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>収集データを統合DBに格納し分析</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>市場動向の可視化ダッシュボード実装</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Bot className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>AIチャットボット開発支援</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">スタートアップ企業の生成AI活用チャットボット開発をサポートしました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>OpenAI APIの実装と最適化</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>プロンプトエンジニアリングの改善</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>ユーザー満足度30%向上を実現</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Globe className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>SaaSプロダクト開発</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">業務効率化SaaSプロダクトの設計から開発までを担当しました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>Next.jsとSuperbaseを活用した開発</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>サブスクリプション決済システム実装</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>3ヶ月でMVPから本番リリースを実現</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <LineChart className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>プロダクト戦略コンサルティング</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">BtoBサービスのプロダクト戦略立案と実行をサポートしました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>市場調査と競合分析の実施</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>ロードマップ策定と優先順位付け</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>新機能導入後の売上20%増加</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Workflow className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>アジャイル開発プロセス導入</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">IT企業のプロジェクト管理プロセス改善を支援しました。</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>スクラム開発手法の導入支援</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>チーム間コミュニケーション改善</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>開発サイクル期間を40%短縮</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <Image
                  src="/professional-computer-work.png"
                  alt="About CodeX"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">プロフィール</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    CodeXとして、エンジニアリングとプロダクトマネジメントの両面からクライアントのビジネス成長を支援しています。
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    技術とビジネスの両方を理解し、クライアントの課題に対して最適なソリューションを提供することを得意としています。
                    スクレイピング、Chrome拡張開発、Webサービス開発、生成AI開発支援などの技術スキルと、
                    プロダクト戦略のコンサルティングやプロジェクトマネジメントのスキルを組み合わせて、
                    クライアントのビジネス成長を総合的にサポートします。
                  </p>
                  <p>
                    これまでの経験を活かし、技術的な実装だけでなく、ビジネス目標の達成に向けた戦略的なアドバイスも提供しています。
                    お客様のニーズに合わせて柔軟に対応し、最適なソリューションを提案いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  プロジェクトや相談についてのお問い合わせはこちらからお願いします
                </p>
              </div>
            </div>
            <div className="mx-auto flex justify-center max-w-5xl py-12">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>お問い合わせフォーム</CardTitle>
                  <CardDescription>プロジェクトについてのご相談はこちらから</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Link href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full">
                      Googleフォームを開く
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="text-lg font-bold">CodeX</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} CodeX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
