"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ShoppingCart,
  Calendar,
  Clock,
  User,
  Search,
  Heart,
  Plus,
  Minus } from
"lucide-react";

type Screen =
"dashboard" |
"catalog" |
"cart" |
"order" |
"history" |
"profile";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const sampleProducts: Product[] = [
{
  id: 1,
  name: "トップリブ 特製",
  description: "ナンバー 260g",
  price: 350,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 2,
  name: "ビーフステーキ",
  description: "プレミアム 300g",
  price: 450,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 3,
  name: "チキンカツ",
  description: "ジューシー 200g",
  price: 280,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 4,
  name: "ポークソテー",
  description: "厚切り 250g",
  price: 380,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 5,
  name: "ハンバーグ",
  description: "手作り 180g",
  price: 320,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 6,
  name: "サーモン焼き",
  description: "ノルウェー産 220g",
  price: 420,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 7,
  name: "エビフライ",
  description: "大ぶり 3本",
  price: 390,
  image: "/images/food-item.jpg",
  quantity: 1
},
{
  id: 8,
  name: "唐揚げ",
  description: "ジューシー 6個",
  price: 300,
  image: "/images/food-item.jpg",
  quantity: 1
}];


export default function JapaneseFoodApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [monthlyBudget, setMonthlyBudget] = useState(7500);
  const [cartItems, setCartItems] = useState<Product[]>([
  {
    id: 1,
    name: "トップリブ 特製",
    description: "ナンバー 260g",
    price: 350,
    image: "/images/food-item.jpg",
    quantity: 1
  },
  {
    id: 2,
    name: "ビーフステーキ",
    description: "プレミアム 300g",
    price: 450,
    image: "/images/food-item.jpg",
    quantity: 1
  },
  {
    id: 3,
    name: "チキンカツ",
    description: "ジューシー 200g",
    price: 280,
    image: "/images/food-item.jpg",
    quantity: 1
  }]
  );
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
    items.
    map((item) =>
    item.id === id ?
    { ...item, quantity: Math.max(0, item.quantity + change) } :
    item
    ).
    filter((item) => item.quantity > 0)
    );
  };

  const updateProductQuantity = (id: number, change: number) => {
    setProducts((items) =>
    items.map((item) =>
    item.id === id ?
    { ...item, quantity: Math.max(1, item.quantity + change) } :
    item
    )
    );
  };

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
        item.id === product.id ?
        { ...item, quantity: item.quantity + product.quantity } :
        item
        );
      } else {
        return [...items, { ...product }];
      }
    });
  };

  const Sidebar = () =>
  <div
    className="w-[140px] bg-[#fda900] flex flex-col items-center py-6 space-y-8 fixed left-0 top-0 h-full z-10"
    data-oid="ehf5pv5">

      {/* Logo Section */}
      <div
      className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm"
      data-oid="pm140hy">

        <div className="text-center" data-oid="uon8yg4">
          <div
          className="w-6 h-6 mx-auto bg-[#fda900] rounded-sm flex items-center justify-center"
          data-oid="h13t6hv">

            <ShoppingCart size={12} className="text-white" data-oid="kd48lv4" />
          </div>
          <div
          className="text-[#fda900] font-bold text-xs leading-tight mt-1 text-foreground"
          data-oid="0d-oq05">

            かいたす
          </div>
        </div>
      </div>

      <nav className="flex flex-col space-y-4" data-oid="bglg0.p">
        <Button
        variant={currentScreen === "dashboard" ? "default" : "ghost"}
        size="sm"
        className={`w-full h-12 px-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
        currentScreen === "dashboard" ?
        "bg-white text-[#fda900] shadow-md scale-105 hover:bg-white/90" :
        "text-white hover:bg-white/20 hover:scale-105"}`
        }
        onClick={() => setCurrentScreen("dashboard")}
        data-oid="lqzeqpl">

          <Home size={16} data-oid="49jmgrv" />
          <span className="text-xs font-medium" data-oid="bpnb.35">
            ホーム
          </span>
        </Button>
        <Button
        variant={currentScreen === "catalog" ? "default" : "ghost"}
        size="sm"
        className={`w-full h-12 px-2 rounded-lg transition-all duration-200 flex items-center gap-2 pl-2 ${
        currentScreen === "catalog" ?
        "bg-white text-[#fda900] shadow-md scale-105 hover:bg-white/90" :
        "text-white hover:bg-white/20 hover:scale-105"}`
        }
        onClick={() => setCurrentScreen("catalog")}
        data-oid="iu4097_">

          <ShoppingCart size={16} data-oid="5.6_5og" />
          <span className="text-xs font-medium" data-oid="r0elf4e">
            買い出し
          </span>
        </Button>
        <Button
        variant={currentScreen === "cart" ? "default" : "ghost"}
        size="sm"
        className={`w-full h-12 px-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
        currentScreen === "cart" ?
        "bg-white text-[#fda900] shadow-md scale-105 hover:bg-white/90" :
        "text-white hover:bg-white/20 hover:scale-105"}`
        }
        onClick={() => setCurrentScreen("cart")}
        data-oid="1yqj0f6">

          <ShoppingCart size={16} data-oid="swns-i1" />
          <span className="text-xs font-medium" data-oid="w3.9.he">
            買い物かご
          </span>
        </Button>
        <Button
        variant={currentScreen === "history" ? "default" : "ghost"}
        size="sm"
        className={`w-full h-12 rounded-lg transition-all duration-200 flex items-center gap-2 px-[px] pl-2 pr-2 ${
        currentScreen === "history" ?
        "bg-white text-[#fda900] shadow-md scale-105 hover:bg-white/90" :
        "text-white hover:bg-white/20 hover:scale-105"}`
        }
        onClick={() => setCurrentScreen("history")}
        data-oid="rzbvl29">

          <Clock size={16} data-oid="z9l4bln" />
          <span className="text-xs font-medium" data-oid="vuej:k:">
            購入履歴
          </span>
        </Button>
        <Button
        variant="ghost"
        size="sm"
        className="w-full h-12 px-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-white hover:bg-white/20 hover:scale-105"
        data-oid="sub-btn-1">

          <Calendar size={16} data-oid="sub-icon-1" />
          <span className="text-xs font-medium" data-oid="sub-text-1">
            定期購入
          </span>
        </Button>
        <Button
        variant={currentScreen === "profile" ? "default" : "ghost"}
        size="sm"
        className={`w-full h-12 px-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
        currentScreen === "profile" ?
        "bg-white text-[#fda900] shadow-md scale-105 hover:bg-white/90" :
        "text-white hover:bg-white/20 hover:scale-105"}`
        }
        onClick={() => setCurrentScreen("profile")}
        data-oid="jyqaqbq">

          <User size={16} data-oid="1s_-8hn" />
          <span className="text-xs font-medium" data-oid="93zyb9f">
            マイページ
          </span>
        </Button>
      </nav>
    </div>;


  const Dashboard = () =>
  <div
    className="flex-1 bg-[#f5f5f5] p-6 ml-[140px] min-h-screen"
    data-oid="ysuosjy">

      <div
      className="max-w-[800px] space-y-4 m-[45px] mx-[202.5px] my-0 mt-0 mb-0 mr-[102.5px] ml-[102.5px]"
      data-oid=":xr07ip">

        {/* Notification Card */}
        <Card
        className="p-4 border-2 border-[#fda900] bg-white"
        data-oid="2bp9lo4">

          <h3
          className="text-center font-medium mb-3 text-sm"
          data-oid="aek175l">

            お知らせ
          </h3>
          <div className="h-12 bg-[#adadad] rounded" data-oid="v_esgva"></div>
        </Card>

        {/* Budget Card */}
        <Card
        className="p-4 border-2 border-[#fda900] bg-white"
        data-oid="t2fyzfc">

          <div
          className="flex justify-between items-center mb-2"
          data-oid=":be0a2k">

            <span className="text-sm font-medium" data-oid=":6v2jl-">
              今月の予算 ▶
            </span>
            <span className="font-bold text-lg" data-oid="qq2w-88">
              残り¥7,500
            </span>
          </div>
          <div className="text-xs text-[#adadad] mb-2" data-oid="woecoz3">
            今月の支出　¥12,500
          </div>
          <div
          className="w-full bg-[#adadad] rounded-full h-4 mb-1"
          data-oid="pk6di4e">

            <div
            className="bg-[#209fde] h-4 rounded-full"
            style={{ width: "60%" }}
            data-oid="5_0shjj">
          </div>
          </div>
          <div className="text-xs text-right text-[#209fde]" data-oid="6x91r4a">
            使用率: 60%
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-6" data-oid="ta8f1it">
          <Button
          variant="outline"
          className="w-[180px] h-[180px] text-center border-[5px] border-[#fda900] bg-white hover:bg-gray-50 rounded-[20px] flex-col p-6 relative"
          style={{
            filter: "drop-shadow(4.5px 4.5px 0 #E4E2E2)"
          }}
          onClick={() => setCurrentScreen("catalog")}
          data-oid="6g1e2.x">

            <ShoppingCart
            className="mb-4 text-[#209fde]"
            size={56}
            data-oid=".qvzx0d" />


            <span
            className="text-[#101010] font-['BIZ_UDPGothic'] text-[20px] font-bold leading-normal"
            data-oid="1417ieu">

              買い出し
            </span>
          </Button>
          <Button
          variant="outline"
          className="w-[180px] h-[180px] text-center border-[5px] border-[#fda900] bg-white rounded-[20px] hover:bg-gray-50 flex-col p-6 relative"
          style={{
            filter: "drop-shadow(4.5px 4.5px 0 #E4E2E2)"
          }}
          onClick={() => setCurrentScreen("catalog")}
          data-oid="eljule7">

            <Calendar
            className="mb-4 text-[#209fde]"
            size={56}
            data-oid="899dc0:" />


            <span
            className="text-[#101010] font-['BIZ_UDPGothic'] text-[20px] font-bold leading-normal"
            data-oid="_8lynit">

              定期購入の確認
            </span>
          </Button>
          <Button
          variant="outline"
          className="w-[180px] h-[180px] text-center border-[5px] border-[#fda900] bg-white rounded-[20px] hover:bg-gray-50 flex-col p-6 relative"
          style={{
            filter: "drop-shadow(4.5px 4.5px 0 #E4E2E2)"
          }}
          onClick={() => setCurrentScreen("history")}
          data-oid="vhz4ae4">

            <Clock
            className="mb-4 text-[#209fde]"
            size={56}
            data-oid="d-o_1-x" />


            <span
            className="text-[#101010] font-['BIZ_UDPGothic'] text-[20px] font-bold leading-normal"
            data-oid="pu-k0wb">

              購入履歴
            </span>
          </Button>
          <Button
          variant="outline"
          className="w-[180px] h-[180px] text-center border-[5px] border-[#fda900] bg-white rounded-[20px] hover:bg-gray-50 flex-col p-6 relative"
          style={{
            filter: "drop-shadow(4.5px 4.5px 0 #E4E2E2)"
          }}
          onClick={() => setCurrentScreen("profile")}
          data-oid="oodndhw">

            <User
            className="mb-4 text-[#209fde]"
            size={56}
            data-oid="ofrwqya" />


            <span
            className="text-[#101010] font-['BIZ_UDPGothic'] text-[20px] font-bold leading-normal"
            data-oid="5s21wmk">

              マイページ
            </span>
          </Button>
        </div>
      </div>
    </div>;


  const Catalog = () =>
  <div
    className="flex-1 bg-[#f5f5f5] p-6 ml-[140px] relative min-h-screen"
    data-oid="d95y1m5">

      <div
      className="absolute right-0 top-0 bottom-0 w-1 bg-[#fda900]"
      data-oid="kh0_yce">
    </div>

      <div className="max-w-4xl mx-auto" data-oid="psedc55">
        <div className="relative mb-6" data-oid="gfk0oa_">
          <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#adadad]"
          size={18}
          data-oid="wum_nxs" />


          <Input
          placeholder="商品名で検索"
          className="pl-12 h-12 border-2 border-[#209fde] text-sm rounded-lg bg-white shadow-sm focus:border-[#209fde] focus:ring-2 focus:ring-[#209fde]/20"
          data-oid="fsk2zzr" />

        </div>

        <div className="flex gap-3 mb-6" data-oid="br-d9o3">
          <Button
          size="sm"
          className="bg-[#209fde] text-white text-sm px-6 h-10 border-2 border-[#209fde] rounded-lg hover:bg-[#209fde]/90 shadow-sm font-medium"
          data-oid=".zvc9j.">

            健康重視
          </Button>
          <Button
          size="sm"
          variant="outline"
          className="text-sm px-6 h-10 border-2 border-[#209fde] text-[#209fde] rounded-lg bg-white hover:bg-[#209fde]/10 shadow-sm font-medium"
          data-oid="jm:hia2">

            お気に入り
          </Button>
          <Button
          size="sm"
          variant="outline"
          className="text-sm px-6 h-10 border-2 border-[#209fde] text-[#209fde] rounded-lg bg-white hover:bg-[#209fde]/10 shadow-sm font-medium"
          data-oid="oxpz50q">

            価格順
          </Button>
          <Button
          size="sm"
          variant="outline"
          className="text-sm px-6 h-10 border-2 border-[#209fde] text-[#209fde] rounded-lg bg-white hover:bg-[#209fde]/10 shadow-sm font-medium"
          data-oid="apgxdwh">

            定期購入
          </Button>
        </div>

        <div className="flex justify-center gap-2 mb-6" data-oid="uy6_dcp">
          {[1, 2, 3, 4, 5].map((num) =>
        <Button
          key={num}
          size="sm"
          variant={num === 1 ? "default" : "outline"}
          className={`w-10 h-10 p-0 text-sm rounded-lg border-2 font-medium shadow-sm ${
          num === 1 ?
          "bg-[#fda900] border-[#fda900] text-white hover:bg-[#fda900]/90" :
          "border-[#209fde] text-[#209fde] bg-white hover:bg-[#209fde]/10"}`
          }
          data-oid="9r7o0ii">

              {num}
            </Button>
        )}
          <span className="text-sm self-center font-medium" data-oid="xd09rri">
            ...
          </span>
          <Button
          size="sm"
          variant="outline"
          className="w-10 h-10 p-0 text-sm border-2 border-[#209fde] text-[#209fde] rounded-lg bg-white hover:bg-[#209fde]/10 shadow-sm font-medium"
          data-oid="f8qlkjv">

            15
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6" data-oid="h7qwqv1">
          {products.map((product) =>
        <Card
          key={product.id}
          className="p-4 bg-white border-2 border-[#e0e0e0] rounded-xl shadow-sm hover:shadow-md transition-shadow"
          data-oid="3w-11ql">

              <div className="relative mb-3" data-oid="8gipz64">
                <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg"
              data-oid="q.-_y:_" />


                <Heart
              className="absolute top-2 right-2 text-[#209fde] fill-[#209fde]"
              size={18}
              data-oid="eo3z5j5" />

              </div>
              <h4 className="text-sm font-bold mb-1" data-oid="d:mf1eo">
                {product.name}
              </h4>
              <p className="text-xs text-[#adadad] mb-3" data-oid="ms.1o9h">
                {product.description}
              </p>
              <div
            className="flex justify-between items-center"
            data-oid="r7z2qp8">

                <span
              className="font-bold text-base text-[#209fde]"
              data-oid="eq4gt6a">

                  ¥{product.price}
                </span>
                <div className="flex items-center gap-2" data-oid="4z4g4a-">
                  <Button
                size="icon"
                variant="outline"
                className="w-7 h-7 border-2 border-[#209fde] rounded-md bg-white hover:bg-[#209fde]/10"
                onClick={() => updateProductQuantity(product.id, -1)}
                data-oid="les5kg0">

                    <Minus
                  size={12}
                  className="text-[#209fde]"
                  data-oid="d7ycg-q" />

                  </Button>
                  <span
                className="text-sm w-6 text-center font-medium"
                data-oid="f1loo1.">

                    {product.quantity}
                  </span>
                  <Button
                size="icon"
                variant="outline"
                className="w-7 h-7 border-2 border-[#209fde] rounded-md bg-white hover:bg-[#209fde]/10"
                onClick={() => updateProductQuantity(product.id, 1)}
                data-oid=":--ycbg">

                    <Plus
                  size={12}
                  className="text-[#209fde]"
                  data-oid="olbxiee" />

                  </Button>
                </div>
              </div>
            </Card>
        )}
        </div>

        {/* Cart Summary */}
        <div
        className="flex justify-between items-center bg-[#fda900] text-white p-4 rounded-xl border-2 border-[#fda900] shadow-md"
        data-oid="t2ub1nx">

          <span className="text-base font-bold" data-oid="5rigjnl">
            {cartItems.length}点 ¥
            {cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          )}
          </span>
          <Button
          className="bg-white text-[#fda900] text-base font-bold px-8 h-11 border-2 border-white rounded-lg hover:bg-gray-50 shadow-sm"
          onClick={() => setCurrentScreen("cart")}
          data-oid="b9c3xju">

            購入
          </Button>
        </div>
      </div>
    </div>;


  const Cart = () =>
  <div className="flex-1 bg-white p-6 ml-[140px]" data-oid="qie1-gm">
      <div className="max-w-sm mx-auto" data-oid="-j93.-d">
        <h2 className="text-base font-bold mb-4" data-oid="gdwztq6">
          買い物かご
        </h2>

        <div className="space-y-3 mb-6" data-oid=":2r1yrd">
          {cartItems.map((item, index) =>
        <Card
          key={item.id}
          className="p-3 bg-white border-2 border-gray-200 rounded-lg"
          data-oid="5rgf5dd">

              <div className="flex items-center gap-3" data-oid=".a7yvq5">
                <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
              data-oid="b0g5711" />


                <div className="flex-1" data-oid="yd66:be">
                  <h4 className="text-sm font-medium" data-oid="5tlgvsv">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#adadad]" data-oid="_b89cis">
                    {item.description}
                  </p>
                </div>
                <div className="text-right" data-oid="f:g9-vr">
                  <div className="text-xs mb-1" data-oid="3_9wxay">
                    数量
                  </div>
                  <div className="flex items-center gap-1" data-oid="zdp13dt">
                    <Button
                  size="icon"
                  variant="outline"
                  className="w-5 h-5 border border-gray-300 rounded bg-transparent"
                  onClick={() => updateQuantity(item.id, -1)}
                  data-oid="g4qqy_k">

                      <Minus size={10} data-oid="2h.nwkc" />
                    </Button>
                    <span
                  className="text-xs w-4 text-center"
                  data-oid="weymacu">

                      {item.quantity}
                    </span>
                    <Button
                  size="icon"
                  variant="outline"
                  className="w-5 h-5 border border-gray-300 rounded bg-transparent"
                  onClick={() => updateQuantity(item.id, 1)}
                  data-oid="4kc4n3t">

                      <Plus size={10} data-oid=".gef-yq" />
                    </Button>
                  </div>
                </div>
                <div className="text-right" data-oid="8ke_pvk">
                  <span className="font-bold text-sm" data-oid="jo1znli">
                    ¥{item.price}
                  </span>
                </div>
              </div>
            </Card>
        )}
        </div>

        <div
        className="border-t-2 border-gray-200 pt-4 mb-6"
        data-oid="lx.9fs:">

          <div
          className="flex justify-between text-base font-bold"
          data-oid="e-466ve">

            <span data-oid="qr0:wva">合計 {cartItems.length}点</span>
            <span data-oid="5tmrc4s">
              ¥
              {cartItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}
            </span>
          </div>
        </div>

        <div className="flex gap-3" data-oid="ufdhcq:">
          <Button
          variant="outline"
          className="flex-1 text-sm border-2 border-[#fda900] text-[#fda900] rounded-md bg-transparent"
          onClick={() => setCurrentScreen("order")}
          data-oid="8i_h.o.">

            注文確認
          </Button>
          <Button
          className="flex-1 bg-[#fda900] text-sm border-2 border-[#fda900] rounded-md hover:bg-[#fda900]/90"
          onClick={() => setCurrentScreen("catalog")}
          data-oid="mgchczd">

            買い物を続ける
          </Button>
        </div>
      </div>
    </div>;


  const Order = () =>
  <div className="flex-1 bg-white p-6 ml-[140px]" data-oid="syv6qb8">
      <div className="max-w-sm mx-auto" data-oid="9cyq3uk">
        <h2 className="text-base font-bold mb-4" data-oid="ycsxz70">
          注文確認
        </h2>

        {/* Delivery Address */}
        <Card
        className="p-4 mb-4 bg-white border-2 border-[#fda900] rounded-lg"
        data-oid="jk:2_ry">

          <div className="flex items-start justify-between" data-oid="ih9dsxw">
            <div data-oid="r6l2mt0">
              <h3
              className="font-medium mb-2 text-sm flex items-center"
              data-oid="fp4z1m-">

                <span className="mr-2" data-oid="qyv7-tr">
                  📍
                </span>
                配達先
              </h3>
              <p className="text-sm" data-oid="itribae">
                徳島県鳴門市○○○
              </p>
              <p className="text-sm" data-oid=".5ob1_r">
                西口○○
              </p>
            </div>
            <Button
            size="sm"
            className="bg-[#fda900] text-white text-xs border-2 border-[#fda900] rounded-md hover:bg-[#fda900]/90"
            data-oid="5zhtpvt">

              変更
            </Button>
          </div>
        </Card>

        {/* Order Summary */}
        <Card
        className="p-4 mb-4 bg-white border-2 border-[#fda900] rounded-lg"
        data-oid="8zvem9v">

          <div className="space-y-2" data-oid=":x26-uf">
            <div className="flex justify-between text-sm" data-oid="0qqfqwa">
              <span data-oid="s1w10pe">小計</span>
              <span data-oid="vizf-74">¥5,000</span>
            </div>
            <div className="flex justify-between text-sm" data-oid="u9:dvh7">
              <span data-oid="-7g8x72">配送料</span>
              <span data-oid="z4m-3lx">¥100</span>
            </div>
            <div
            className="border-t-2 border-gray-200 pt-2 flex justify-between font-bold text-sm"
            data-oid=".dfs9ab">

              <span data-oid="7b245_-">合計</span>
              <span data-oid="21xx5:h">¥5,100</span>
            </div>
          </div>
        </Card>

        {/* Delivery Schedule */}
        <Card
        className="p-4 mb-6 bg-white border-2 border-[#fda900] rounded-lg"
        data-oid="a13j9dc">

          <h3
          className="font-medium mb-2 text-sm flex items-center"
          data-oid="qfwuago">

            <span className="mr-2" data-oid="riz.ufg">
              📅
            </span>
            配達メモ
          </h3>
          <p className="text-sm" data-oid="zeyhnax">
            2025年 9月1日午後16:00
          </p>
          <p className="text-sm" data-oid=":zrymkx">
            ご注文予定
          </p>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3" data-oid="nz7v1jm">
          <Button
          variant="outline"
          className="flex-1 text-sm border-2 border-[#fda900] text-[#fda900] rounded-md bg-transparent"
          onClick={() => setCurrentScreen("cart")}
          data-oid="-fxs0ta">

            かごに戻る
          </Button>
          <Button
          className="flex-1 bg-[#fda900] text-white text-sm border-2 border-[#fda900] rounded-md hover:bg-[#fda900]/90"
          data-oid="khc3gs1">

            注文を確定してサイトへ
          </Button>
        </div>
      </div>
    </div>;


  const History = () =>
  <div className="flex-1 bg-white p-6 ml-[140px]" data-oid="n3s1kmy">
      <div className="max-w-sm mx-auto" data-oid="me-dwvn">
        <h2 className="text-base font-bold mb-4" data-oid="x::kret">
          購入履歴
        </h2>

        <div className="space-y-3" data-oid="4c1ea9l">
          {Array.from({ length: 6 }).map((_, i) =>
        <Card
          key={i}
          className="p-3 bg-white border-2 border-gray-200 rounded-lg"
          data-oid="giqzpfm">

              <div className="flex items-center gap-3" data-oid="jlp_i_y">
                <div className="text-xs" data-oid="jflct6b">
                  <div data-oid="mtapic7">2025年</div>
                  <div data-oid="op7puzz">9月1日</div>
                </div>
                <img
              src="/images/food-item.jpg"
              alt="トップリブ 特製"
              className="w-12 h-12 object-cover rounded"
              data-oid="wur3l8e" />


                <div className="flex-1" data-oid="kmj3p4f">
                  <h4 className="text-sm font-medium" data-oid="uwyj:6y">
                    トップバリュ 特製
                  </h4>
                  <p className="text-xs text-[#adadad]" data-oid="p5nlqyv">
                    ナンバー 260g
                  </p>
                  <Badge
                variant="secondary"
                className="text-xs border border-gray-300 rounded"
                data-oid="_ne7wd0">

                    お気に入りに追加
                  </Badge>
                </div>
                <div className="text-right" data-oid="t6t6kx-">
                  <div className="text-xs" data-oid="9d22m2g">
                    1コ
                  </div>
                  <div className="font-bold text-sm" data-oid="8yen38r">
                    ¥350
                  </div>
                </div>
              </div>
            </Card>
        )}
        </div>
      </div>
    </div>;


  const Profile = () =>
  <div className="flex-1 bg-white p-6 ml-[140px]" data-oid="3pchgx4">
      <div className="max-w-sm mx-auto space-y-4" data-oid=":530dgu">
        <h2 className="text-base font-bold" data-oid="0a9t2n.">
          マイページ
        </h2>

        <Card
        className="p-4 bg-white border-2 border-gray-200 rounded-lg"
        data-oid="6:a7mk2">

          <div className="flex items-center gap-3" data-oid="mhd5qso">
            <div
            className="w-12 h-12 bg-[#adadad] rounded-full"
            data-oid="v96ohmr">
          </div>
            <div data-oid="w32:5lp">
              <h3 className="font-medium text-sm" data-oid="2y3hjo1">
                水口 和佳さん
              </h3>
              <Button
              size="sm"
              variant="outline"
              className="text-xs border-2 border-gray-300 rounded-md bg-transparent"
              data-oid="541gvwr">

                名前を変更
              </Button>
            </div>
          </div>
        </Card>

        <Card
        className="p-4 bg-white border-2 border-gray-200 rounded-lg"
        data-oid="o4a2j0u">

          <h3 className="font-medium mb-3 text-sm" data-oid="xkxxiap">
            予算設定
          </h3>
          <div className="space-y-3" data-oid="prr6v6o">
            <div data-oid="zve5:m0">
              <label className="text-sm block mb-1" data-oid="d68qzu_">
                今月の予算
              </label>
              <div className="flex items-center gap-2" data-oid="lirbdor">
                <span className="text-sm" data-oid="zr1baos">
                  ¥
                </span>
                <Input
                type="number"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="flex-1 text-sm border-2 border-gray-300 rounded-md"
                data-oid="_x89egx" />

              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>;


  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard data-oid="ylfph:g" />;
      case "catalog":
        return <Catalog data-oid="wcl4:a0" />;
      case "cart":
        return <Cart data-oid="13gj:ol" />;
      case "order":
        return <Order data-oid="h1.bjtn" />;
      case "history":
        return <History data-oid="3.1vred" />;
      case "profile":
        return <Profile data-oid="faqj1gy" />;
      default:
        return <Dashboard data-oid="fntgw1v" />;
    }
  };

  return (
    <div className="h-screen bg-white" data-oid="i339shy">
      <Sidebar data-oid="7_f:5ci" />
      {renderScreen()}
    </div>);

}