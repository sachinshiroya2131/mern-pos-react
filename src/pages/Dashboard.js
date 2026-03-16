import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = `Dashboard | ${process.env.REACT_APP_APP_NAME}`;
  }, []);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500">Real-time performance metrics for today, Oct 24 2023</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Export CSV</button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 shadow-sm transition-colors">New Transaction</button>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-purpose="kpi-cards">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">$12,845.50</h3>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <span>12.5%</span>
            <span className="text-slate-400 font-normal ml-1 text-xs">vs yesterday</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Transactions</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">482</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <span>5.2%</span>
            <span className="text-slate-400 font-normal ml-1 text-xs">vs yesterday</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg. Ticket</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">$26.65</h3>
            </div>
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-rose-600 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <span>1.8%</span>
            <span className="text-slate-400 font-normal ml-1 text-xs">vs yesterday</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Returns</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">14</h3>
            </div>
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <span>8.4%</span>
            <span className="text-slate-400 font-normal ml-1 text-xs">fewer than avg</span>
          </div>
        </div>
      </section>
      <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden" data-purpose="sales-chart">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Sales Performance</h2>
            <p className="text-sm text-slate-500">Hourly revenue breakdown for all terminals</p>
          </div>
          <div className="flex gap-2">
            <select className="text-sm border-slate-200 rounded-lg focus:ring-brand-500 focus:border-brand-500">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>
        <div className="p-6">
          <div className="h-80 w-full bg-slate-50 rounded-lg relative border border-dashed border-slate-200 overflow-hidden group">

            <div className="absolute inset-x-0 bottom-0 h-4/5 flex items-end justify-between px-8">
              <div className="w-2 h-1/4 bg-brand-500 rounded-t-sm opacity-20"></div>
              <div className="w-2 h-2/5 bg-brand-500 rounded-t-sm opacity-20"></div>
              <div className="w-2 h-3/5 bg-brand-500 rounded-t-sm opacity-20"></div>
              <div className="w-2 h-2/5 bg-brand-500 rounded-t-sm opacity-20"></div>
              <div className="w-2 h-4/5 bg-brand-500 rounded-t-sm opacity-40"></div>
              <div className="w-2 h-full bg-brand-500 rounded-t-sm opacity-60"></div>
              <div className="w-2 h-4/5 bg-brand-500 rounded-t-sm opacity-80"></div>
              <div className="w-2 h-3/5 bg-brand-500 rounded-t-sm opacity-40"></div>
              <div className="w-2 h-2/5 bg-brand-500 rounded-t-sm opacity-20"></div>
            </div>
            <svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
              <path d="M0,150 Q200,80 400,180 T800,100 T1200,200 L1200,320 L0,320 Z" fill="url(#gradient)" opacity="0.1"></path>
              <path d="M0,150 Q200,80 400,180 T800,100 T1200,200" fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-width="3"></path>
              <defs>
                <lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#0ea5e9"></stop>
                  <stop offset="100%" stop-color="white"></stop>
                </lineargradient>
              </defs>
            </svg>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-2 rounded shadow-xl text-[10px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-bold">14:00 PM</p>
              <p>Revenue: $1,240.00</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2">
            <span>08:00 AM</span>
            <span>10:00 AM</span>
            <span>12:00 PM</span>
            <span>02:00 PM</span>
            <span>04:00 PM</span>
            <span>06:00 PM</span>
            <span>08:00 PM</span>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <section className="xl:col-span-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-[500px]" data-purpose="live-transaction-feed">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-slate-900">Live Transaction Feed</h2>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Live</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="divide-y divide-slate-50">
              <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Order #TRX-8821</p>
                    <p className="text-xs text-slate-500">2 mins ago • Card Payment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">$84.99</p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 uppercase">Completed</span>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Order #TRX-8820</p>
                    <p className="text-xs text-slate-500">5 mins ago • Cash</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">$12.50</p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 uppercase">Completed</span>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-rose-50 flex items-center justify-center text-rose-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Return #RET-104</p>
                    <p className="text-xs text-slate-500">12 mins ago • Store Credit</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-rose-600">-$45.00</p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 uppercase">Returned</span>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Order #TRX-8819</p>
                    <p className="text-xs text-slate-500">18 mins ago • Card Payment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">$215.30</p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 uppercase">Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <button className="w-full py-2 text-xs font-bold text-brand-600 uppercase tracking-widest hover:text-brand-800 transition-colors">View All Transactions</button>
          </div>
        </section>
        <section className="xl:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[500px]" data-purpose="low-stock-table">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h2 className="font-bold text-slate-900">Low Stock Alerts</h2>
              <p className="text-xs text-slate-500">Products currently below reorder threshold</p>
            </div>
            <button className="text-xs font-semibold text-brand-600 hover:underline">Manage Alerts</button>
          </div>
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Current Stock</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img alt="Prod" className="w-8 h-8 rounded object-cover border border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCffL2VLwSlBUxIbqhiKCV_kQyId0xO0yBBjuDKmRuYsLOgts34LNjP7Omrd6ONVJCJhAAO0kGO2VCzJnDQqfJwXRcR9GSMwhg7h9FKhjUs1_V30vpcRqX7NJqNDASD16N-3EMVSUhThDplgvM8eKFNvT8FFnVGL74_vXSba-hn9W8LOxjaJVt8gvygtx-UZhkCkKHkfTkF-4KKxyOHN0nKvrTAzLnzJ5rof5cRpAuGWpsZYg2yDgunpQ3dgsDn_JwY7AvVGCZygNO-" />
                      <span className="text-sm font-medium text-slate-900">Espresso Roast 1kg</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">ESP-102-BRN</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Coffee Beans</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-rose-600">8 units</span>
                      <span className="text-[10px] text-slate-400">/ min 25</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-rose-50 text-rose-600 uppercase">Critical</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img alt="Prod" className="w-8 h-8 rounded object-cover border border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBisJqn7Ukd1IzW-JAUbPDenCGu-aRWXJPcYIIHqWndi9ClgEz9ryh314ahVpvc_vmMWsU4nY7aiDht0uN_IYYqqH-63fKSMpPHFwmO_ehd_BobuVj9KjI8s63XDyeZyu5ka6EDZqplxpEqYkhqHyIWZ98yAACYSK0W2HDfRV2dcuhUsbTii_DWT9Psa7BqoahY6knR6YpLdtHz4Y0zBObv9FaQO6lIVWMRShA5xy969zbyWcXPvbugc3KO1yc3tI9WfN0Z3rTB2TN" />
                      <span className="text-sm font-medium text-slate-900">Paper Cups (8oz)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">ACC-150-PC8</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Accessories</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-amber-600">142 units</span>
                      <span className="text-[10px] text-slate-400">/ min 500</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-amber-50 text-amber-600 uppercase">Reorder</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img alt="Prod" className="w-8 h-8 rounded object-cover border border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfXIzR4j0RMDgzYQ0gKCQmyP_PdeKY03LtIivpHvyEcef4CSEGHtipY6DUlG1Ws7bsOhlFIEaCerxxiSOYubQadkMkBoIjijM4agr9rl_wApmR4GkLVeWHHNVGOEA8tbm5V-AyHvShDtBtk123IUWIE088y356lR2ACDtlt2ER8jnFNqBWHdFBGYsZGGxzufOHUVJsm0uu5-rcrM8RBce3DtD86X6s1f_NWnGOeemIPrtGed-DmYVSHrdMHP_P2mfbGFOv4tkddsZU" />
                      <span className="text-sm font-medium text-slate-900">Organic Soy Milk</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">MILK-002-SOY</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Dairy &amp; Alternatives</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-rose-600">4 units</span>
                      <span className="text-[10px] text-slate-400">/ min 20</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-rose-50 text-rose-600 uppercase">Critical</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img alt="Prod" className="w-8 h-8 rounded object-cover border border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApPe5FFijkWvoszVIZ6NdC9hEL0iEC9txwHY4MpGaorbvbKUaVq7XZMVkVvoE1dMNSwYjbSUkV_Q4FjGO_NFmBazyaSKfl30fSpJ8XPAKBA5xk5D5edgPd9Tua5hxk2LDOJltVNeN-atO3HF7-nMaZQAXtyBXSE5ZZRT5yrImnZNj_RUF8VD-LvJE3nZOf383bozRCpbI0FQf6CzxsIrKUJT4Bf5tKquyOQuNBeEJ23lRhHbe-Kshbnk_AqXG_cOTvoo04hxKz77z4" />
                      <span className="text-sm font-medium text-slate-900">Caramel Syrup (1L)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">SYR-CAR-01</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Syrups</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-amber-600">12 units</span>
                      <span className="text-[10px] text-slate-400">/ min 15</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-amber-50 text-amber-600 uppercase">Low Stock</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
            <button className="px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm transition-colors">Create Purchase Order</button>
          </div>
        </section>
      </div>
    </div>

  );
}