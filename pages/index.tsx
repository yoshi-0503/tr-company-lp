import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Shield,
  Wrench,
  Flame,
  Sparkles,
  Bug,
  MessageCircle,
  MapPin,
  User,
  Building,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TRカンパニー</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              LINEで相談
            </Button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              住宅メンテナンスのプロフェッショナル
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🏠 住宅メンテナンスのことなら
              <br />
              <span className="text-blue-600">TRカンパニー</span>
              <br />
              にお任せください！
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              建物の点検・保険サポート・清掃・駆除など
              <br />
              お客様の「困った！」を迅速に対応します。
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-5 w-5 mr-2" />
                LINEで相談する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 会社案内 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">会社案内</h2>
            <p className="text-gray-600">お客様との信頼関係を第一に、誠心誠意対応いたします。</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">会社名</p>
                      <p className="text-gray-600">TRカンパニー</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">代表</p>
                      <p className="text-gray-600">鶴田 麗人</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">所在地</p>
                      <p className="text-gray-600">福岡県福津市津屋崎</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Home className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">事業エリア</p>
                      <p className="text-gray-600">福岡県全域対応</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">サービス内容</h2>
            <p className="text-gray-600">お客様のニーズに合わせた幅広いサービスを提供しています</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 無料点検 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">🔧 無料点検（家の健康診断）</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>年1回の定期点検で住まいの状態をチェック</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>外壁・屋根・雨どいなどの外観を確認</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>点検後、写真付き報告書をお渡しします</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 火災保険申請サポート */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Flame className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-xl">🔥 火災保険申請サポート</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>必要書類（写真・見積書・報告書）を無料で準備</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>保険申請のサポートもお任せください</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 清掃・修理対応 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-xl">🧹 清掃・修理対応</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">破損箇所や劣化部位の修理見積＆清掃作業も対応可能です</p>
              </CardContent>
            </Card>

            {/* 害獣駆除 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8 text-orange-600" />
                  <CardTitle className="text-xl">🐾 害獣駆除</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">イタチ・ハクビシン・アライグマなどに対応</p>
              </CardContent>
            </Card>

            {/* 害虫駆除・防除・消毒 */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bug className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-xl">🐜 害虫駆除・防除・消毒</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">シロアリ・ヤスデなどへの対策、防除・消毒作業も可能</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
            <p className="text-gray-600">実際にご利用いただいたお客様からの喜びの声をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* お客様の声1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">福津市 A様</p>
                    <p className="text-sm text-gray-500">無料点検サービス</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「定期点検で屋根の破損を早期発見していただき、雨漏りが発生する前に修理できました。写真付きの詳細な報告書もいただけて、とても安心できました。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>

            {/* お客様の声2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">宗像市 B様</p>
                    <p className="text-sm text-gray-500">害獣駆除</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「屋根裏から聞こえる物音で夜も眠れず怖い思いをしていましたが、イタチの駆除を迅速に対応していただき本当に助かりました。今では安心して眠れます。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>

            {/* お客様の声3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">古賀市 C様</p>
                    <p className="text-sm text-gray-500">火災保険申請サポート</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「駐車場での車の事故で火災保険が使えるなんて知りませんでした。必要書類の準備から申請まで全てサポートしていただき、無事に保険金を受け取ることができました。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>

            {/* お客様の声4 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">糸島市 D様</p>
                    <p className="text-sm text-gray-500">清掃・修理</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「外壁の汚れと小さなひび割れが気になっていましたが、清掃から修理まで一括でお願いできて助かりました。仕上がりもとても綺麗で満足しています。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>

            {/* お客様の声5 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">筑紫野市 E様</p>
                    <p className="text-sm text-gray-500">害虫駆除</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「シロアリの被害が心配でしたが、詳しい調査と効果的な駆除作業をしていただきました。アフターフォローもしっかりしていて信頼できる会社です。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>

            {/* お客様の声6 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">春日市 F様</p>
                    <p className="text-sm text-gray-500">総合メンテナンス</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  「LINEで気軽に相談できるのが良いですね。対応も早く、料金も明確で安心してお任せできました。今後も定期的にお願いしたいと思います。」
                </p>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問（Q&A）</h2>
            <p className="text-gray-600">お客様からよくいただくご質問にお答えします</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Q：点検に費用はかかりますか？</h3>
                    <p className="text-gray-600 pl-4 border-l-4 border-blue-500">
                      A：いいえ、点検は完全無料で実施しております。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Q：火災保険って誰でも使えますか？</h3>
                    <p className="text-gray-600 pl-4 border-l-4 border-blue-500">
                      A：ご加入中の保険内容や被害状況によりますが、多くの方が対象となっています。ご相談ください！
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Q：駆除や消毒だけの相談もOKですか？</h3>
                    <p className="text-gray-600 pl-4 border-l-4 border-blue-500">
                      A：もちろん可能です。お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <MessageCircle className="h-16 w-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">📱 LINEで簡単にご相談いただけます！</h3>
              <p className="text-lg mb-6">友だち追加はこちらから👇</p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8 py-3"
                asChild
              >
                <a href="https://lin.ee/l2WnUJL" target="_blank" rel="noopener noreferrer">
                  👉 LINE友だち追加
                </a>
              </Button>
            </div>
            <p className="text-lg">
              点検・駆除・清掃・保険申請など、
              <br />
              どんなことでもお気軽にご相談ください😊
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">TRカンパニー</span>
          </div>
          <p className="text-gray-400 mb-2">福岡県福津市津屋崎</p>
          <p className="text-gray-400">福岡県全域対応</p>
          <Separator className="my-4 bg-gray-700" />
          <p className="text-sm text-gray-500">© 2024 TRカンパニー. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
