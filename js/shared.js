// ── Shared Data ──────────────────────────────────────────────
const DATA = {
  user: { name: '陳小明', email: 'ming@nctu.edu.tw', initials: '陳' },
  credits: 620,
  creditsGoal: 1000,
  co2: 4.7,
  streak: 12,
  streakDays: [true, true, true, true, true, false, 'today'],

  records: [
    { id:1,  date:'2025-04-25', time:'12:34', name:'紙質餐盒',     cat:'paper',   loc:'資工館',        wt:185, pts:8,  icon:'📄' },
    { id:2,  date:'2025-04-25', time:'09:15', name:'PET 寶特瓶',   cat:'plastic', loc:'圖書館',        wt:22,  pts:5,  icon:'🧴' },
    { id:3,  date:'2025-04-24', time:'17:02', name:'鋁罐',         cat:'metal',   loc:'學生活動中心',  wt:14,  pts:6,  icon:'🥤' },
    { id:4,  date:'2025-04-24', time:'12:50', name:'廚餘殘渣',     cat:'organic', loc:'資工館',        wt:310, pts:4,  icon:'🍱' },
    { id:5,  date:'2025-04-23', time:'11:21', name:'紙杯（帶蓋）', cat:'paper',   loc:'圖書館',        wt:32,  pts:5,  icon:'☕' },
    { id:6,  date:'2025-04-23', time:'08:44', name:'PP 塑膠盒',    cat:'plastic', loc:'生科館',        wt:45,  pts:6,  icon:'📦' },
    { id:7,  date:'2025-04-22', time:'18:30', name:'易開罐',       cat:'metal',   loc:'宿舍 B 棟',     wt:18,  pts:6,  icon:'🥫' },
    { id:8,  date:'2025-04-22', time:'13:10', name:'牛奶紙盒',     cat:'paper',   loc:'資工館',        wt:28,  pts:7,  icon:'🥛' },
    { id:9,  date:'2025-04-21', time:'15:55', name:'保特瓶瓶蓋',   cat:'plastic', loc:'圖書館',        wt:8,   pts:3,  icon:'🔩' },
    { id:10, date:'2025-04-20', time:'10:20', name:'報紙',         cat:'paper',   loc:'宿舍 A 棟',     wt:420, pts:10, icon:'📰' },
    { id:11, date:'2025-04-19', time:'14:35', name:'鋁箔包',       cat:'metal',   loc:'學生活動中心',  wt:12,  pts:5,  icon:'🧃' },
    { id:12, date:'2025-04-19', time:'09:00', name:'HDPE 洗髮瓶',  cat:'plastic', loc:'宿舍 B 棟',     wt:88,  pts:7,  icon:'🧴' },
    { id:13, date:'2025-04-18', time:'12:15', name:'紙質外帶杯',   cat:'paper',   loc:'資工館',        wt:24,  pts:5,  icon:'🧋' },
    { id:14, date:'2025-04-17', time:'11:40', name:'廚餘（水果皮）',cat:'organic',loc:'生科館',        wt:200, pts:3,  icon:'🍊' },
    { id:15, date:'2025-04-16', time:'16:00', name:'鐵罐',         cat:'metal',   loc:'圖書館',        wt:62,  pts:6,  icon:'🥫' },
    { id:16, date:'2025-04-15', time:'13:25', name:'PP 塑膠袋',    cat:'plastic', loc:'資工館',        wt:15,  pts:4,  icon:'🛍️' },
    { id:17, date:'2025-04-14', time:'10:10', name:'紙箱碎片',     cat:'paper',   loc:'宿舍 A 棟',     wt:560, pts:12, icon:'📦' },
    { id:18, date:'2025-04-13', time:'17:50', name:'廚餘（剩飯）', cat:'organic', loc:'學生活動中心',  wt:280, pts:4,  icon:'🍚' },
    { id:19, date:'2025-04-12', time:'09:30', name:'鋁罐',         cat:'metal',   loc:'資工館',        wt:16,  pts:6,  icon:'🥤' },
    { id:20, date:'2025-04-11', time:'14:00', name:'PET 果汁瓶',   cat:'plastic', loc:'圖書館',        wt:30,  pts:5,  icon:'🧃' },
  ],

  machines: [
    { id:'M001', name:'資工館機台',     loc:'資工館 1F',    status:'online',  fill:34, lat:0.52, lng:0.45 },
    { id:'M002', name:'圖書館機台 A',   loc:'圖書館 B1F',   status:'online',  fill:68, lat:0.25, lng:0.28 },
    { id:'M003', name:'圖書館機台 B',   loc:'圖書館 1F',    status:'full',    fill:95, lat:0.28, lng:0.32 },
    { id:'M004', name:'學活機台',       loc:'學生活動中心', status:'online',  fill:21, lat:0.72, lng:0.62 },
    { id:'M005', name:'生科館機台',     loc:'生科館 B1F',   status:'offline', fill:0,  lat:0.40, lng:0.75 },
    { id:'M006', name:'宿舍 A 棟機台',  loc:'宿舍 A 棟 1F', status:'online',  fill:55, lat:0.78, lng:0.30 },
    { id:'M007', name:'宿舍 B 棟機台',  loc:'宿舍 B 棟 1F', status:'online',  fill:42, lat:0.80, lng:0.50 },
  ],

  rewards: [
    { id:'R001', name:'統一超商 50 元折價券',   pts:100, cat:'coupon', icon:'🏪', stock:200 },
    { id:'R002', name:'全家咖啡兌換券',         pts:80,  cat:'coupon', icon:'☕', stock:150 },
    { id:'R003', name:'蔬食午餐 1 份',          pts:120, cat:'food',   icon:'🥗', stock:50  },
    { id:'R004', name:'環保竹製吸管組',         pts:60,  cat:'eco',    icon:'🌿', stock:300 },
    { id:'R005', name:'SortLogix 限定帆布袋',  pts:200, cat:'eco',    icon:'👜', stock:80  },
    { id:'R006', name:'植樹計畫 1 株',          pts:300, cat:'eco',    icon:'🌳', stock:999 },
    { id:'R007', name:'學校餐廳 100 元折扣',    pts:150, cat:'coupon', icon:'🍽️', stock:100 },
    { id:'R008', name:'捷運一日票',             pts:250, cat:'coupon', icon:'🚇', stock:60  },
  ]
};

// ── Helpers ──────────────────────────────────────────────────
const catLabel = { paper:'紙類', plastic:'塑膠', metal:'金屬', organic:'廚餘' };
const catColor  = {
  paper:   { bg:'#EAF3DE', text:'#27500A' },
  plastic: { bg:'#E6F1FB', text:'#0C447C' },
  metal:   { bg:'#F1EFE8', text:'#444441' },
  organic: { bg:'#FAEEDA', text:'#633806' },
};

function showToast(msg, icon = '✓') {
  let t = document.getElementById('global-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'global-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="toast-dot"></span>${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function setActive(page) {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
}

// ── Sidebar renderer ─────────────────────────────────────────
function renderSidebar(activePage) {
  const navItems = [
    { page:'index',   icon: svgHome,    label:'總覽' },
    { page:'history', icon: svgHistory, label:'回收歷史' },
    { page:'map',     icon: svgMap,     label:'機台地圖' },
    { page:'rewards', icon: svgReward,  label:'獎勵兌換' },
  ];

  return `
  <nav class="sidebar">
    <a href="index.html" class="sl-logo">
      <div class="sl-logo-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L14.5 5.25v6.5L9 15 3.5 11.75v-6.5L9 2z" stroke="#C0DD97" stroke-width="1.3" fill="none"/>
          <path d="M9 6L11.5 7.5v3L9 12 6.5 10.5v-3L9 6z" fill="#C0DD97"/>
        </svg>
      </div>
      <div>
        <div class="sl-logo-text">SortLogix</div>
        <div class="sl-logo-sub">智能分類</div>
      </div>
    </a>

    <div class="nav-section-label">主選單</div>
    ${navItems.map(n => `
      <a href="${n.page}.html" class="nav-link${activePage === n.page ? ' active' : ''}" data-page="${n.page}">
        ${n.icon} ${n.label}
      </a>`).join('')}

    <div class="nav-section-label">設定</div>
    <a href="#" class="nav-link" onclick="showToast('設定功能開發中...');return false;">
      ${svgSettings} 設定
    </a>

    <div class="sidebar-footer">
      <div class="user-pill">
        <div class="avatar">${DATA.user.initials}</div>
        <div>
          <div class="user-info-name">${DATA.user.name}</div>
          <div class="user-info-email">${DATA.user.email}</div>
        </div>
      </div>
    </div>
  </nav>`;
}

// ── SVG Icons ─────────────────────────────────────────────────
const svgHome = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1.5 6.5L7.5 1.5l6 5V13a.5.5 0 01-.5.5H9.5V9.5h-3v4H2a.5.5 0 01-.5-.5V6.5z" stroke="currentColor" stroke-width="1.2"/></svg>`;
const svgHistory = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6" stroke="currentColor" stroke-width="1.2"/><path d="M7.5 4.5V7.5l2.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const svgMap = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 1.5C5.5 1.5 4 3 4 5c0 3 3.5 8 3.5 8S11 8 11 5c0-2-1.5-3.5-3.5-3.5z" stroke="currentColor" stroke-width="1.2"/><circle cx="7.5" cy="5" r="1.2" stroke="currentColor" stroke-width="1.1"/></svg>`;
const svgReward = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2l1.4 3.1 3.4.3-2.5 2.3.7 3.3L7.5 9.3 4.5 11l.7-3.3L2.7 5.4l3.4-.3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
const svgSettings = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M7.5 1.5v1M7.5 12.5v1M1.5 7.5h1M12.5 7.5h1M3.2 3.2l.7.7M11.1 11.1l.7.7M11.1 3.9l-.7.7M4.1 11.1l-.7.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;
