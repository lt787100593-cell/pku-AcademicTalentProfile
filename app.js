// 模拟数据
const mockData = {
    // 人员列表数据
    persons: [
        { id: 1, name: '张伟', title: '教授', education: '博士', category: 'teacher', phone: '138****1234', department: '经济学系', joinDate: '2005-09-01' },
        { id: 2, name: '李明', title: '副教授', education: '博士', category: 'teacher', phone: '139****5678', department: '金融学系', joinDate: '2010-03-15' },
        { id: 3, name: '王芳', title: '讲师', education: '博士', category: 'teacher', phone: '137****9012', department: '会计学系', joinDate: '2015-07-01' },
        { id: 4, name: '刘洋', title: '助理教授', education: '博士', category: 'teacher', phone: '136****3456', department: '市场营销系', joinDate: '2018-09-01' },
        { id: 5, name: '陈静', title: '教授', education: '博士', category: 'teacher', phone: '135****7890', department: '战略管理系', joinDate: '2002-03-01' },
        { id: 6, name: '赵磊', title: '高级工程师', education: '硕士', category: 'staff', phone: '134****2345', department: '信息中心', joinDate: '2008-06-01' },
        { id: 7, name: '孙丽', title: '会计师', education: '本科', category: 'staff', phone: '133****6789', department: '财务室', joinDate: '2012-04-01' },
        { id: 8, name: '周强', title: '合同制研究员', education: '博士', category: 'contract', phone: '132****0123', department: '研究中心', joinDate: '2020-01-01' },
        { id: 9, name: '吴敏', title: '合同制助理', education: '硕士', category: 'contract', phone: '131****4567', department: '行政办公室', joinDate: '2021-07-01' },
        { id: 10, name: '郑涛', title: '博士后', education: '博士', category: 'postdoc', phone: '130****8901', department: '经济学系', joinDate: '2023-09-01' },
        { id: 11, name: '黄燕', title: '博士后', education: '博士', category: 'postdoc', phone: '159****2345', department: '金融学系', joinDate: '2024-01-01' },
        { id: 12, name: '林峰', title: '教授（退休）', education: '博士', category: 'retired', phone: '158****6789', department: '经济学系', joinDate: '1990-09-01' },
        { id: 13, name: '何华', title: '副教授（退休）', education: '硕士', category: 'retired', phone: '157****0123', department: '会计学系', joinDate: '1995-07-01' },
        { id: 14, name: '马骏', title: '长江学者', education: '博士', category: 'teacher', phone: '156****4567', department: '金融学系', joinDate: '2000-03-01' },
        { id: 15, name: '高洁', title: '杰青', education: '博士', category: 'teacher', phone: '155****8901', department: '战略管理系', joinDate: '2003-09-01' },
    ],
    // 年龄分布数据
    ageDistribution: {
        all: { '35岁以下': 98, '36-45岁': 156, '46-55岁': 142, '55岁以上': 60 },
        teacher: { '35岁以下': 45, '36-45岁': 89, '46-55岁': 78, '55岁以上': 22 },
    },
    // 各学院平均年龄（用于对比）
    schoolAvgAge: [38.5, 40.2, 41.8, 42.5, 43.1, 44.2, 45.6, 46.8, 47.2, 48.5, 49.1, 50.3, 51.2, 52.4, 53.1, 54.2, 55.3, 56.1, 57.2, 58.4, 59.1, 60.2, 61.3, 62.4, 63.1, 64.2, 65.3, 66.4],
};

// 当前选中的Tab
let currentTab = 'home';
let currentAnalysisModule = 'age';
let currentFilter = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initPersonList();
    initEventListeners();
});

// 初始化图表
function initCharts() {
    // 人员进出趋势图
    const flowCtx = document.getElementById('flowChart');
    if (flowCtx) {
        new Chart(flowCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                datasets: [
                    {
                        label: '入职',
                        data: [8, 5, 12, 7, 9, 15, 10, 6, 11, 8, 12, 12],
                        borderColor: '#52C41A',
                        backgroundColor: 'rgba(82, 196, 26, 0.1)',
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: '减离',
                        data: [-3, -2, -5, -3, -4, -6, -3, -2, -4, -3, -5, -3],
                        borderColor: '#FF4D4F',
                        backgroundColor: 'rgba(255, 77, 79, 0.1)',
                        tension: 0.4,
                        fill: true,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }

    // 年龄分布图
    const ageCtx = document.getElementById('ageChart');
    if (ageCtx) {
        new Chart(ageCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['35岁以下', '36-45岁', '46-55岁', '55岁以上'],
                datasets: [{
                    label: '人数',
                    data: [98, 156, 142, 60],
                    backgroundColor: [
                        'rgba(140, 21, 21, 0.8)',
                        'rgba(140, 21, 21, 0.6)',
                        'rgba(140, 21, 21, 0.4)',
                        'rgba(140, 21, 21, 0.2)',
                    ],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }

    // 全校对比图
    const compareCtx = document.getElementById('compareChart');
    if (compareCtx) {
        new Chart(compareCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['光华', '经济', '国关', '法学', '文学', '历史', '哲学', '数学', '物理', '化学'],
                datasets: [{
                    label: '平均年龄',
                    data: [42.5, 41.2, 43.8, 44.1, 45.2, 46.8, 47.2, 42.1, 43.5, 44.8],
                    backgroundColor: function(context) {
                        return context.dataIndex === 0 ? '#8C1515' : '#E8E8E8';
                    },
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    x: {
                        beginAtZero: false,
                        min: 35,
                        max: 55,
                    }
                }
            }
        });
    }
}

// 初始化人员列表
function initPersonList() {
    renderPersonList(mockData.persons);
}

// 渲染人员列表
function renderPersonList(persons) {
    const container = document.getElementById('person-list');
    if (!container) return;

    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showPersonDetail(${person.id})">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">${person.name}</div>
                <div class="person-detail">${person.title} · ${person.education} · ${person.department}</div>
            </div>
            <div class="person-phone" onclick="event.stopPropagation(); callPerson('${person.phone}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            </div>
        </div>
    `).join('');
}

// 初始化事件监听
function initEventListeners() {
    // 搜索框
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            const filtered = mockData.persons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.title.toLowerCase().includes(keyword) ||
                p.education.toLowerCase().includes(keyword)
            );
            renderPersonList(filtered);
        });
    }

    // 筛选器
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            currentFilter = filter;
            const filtered = filter === 'all' 
                ? mockData.persons 
                : mockData.persons.filter(p => p.category === filter);
            renderPersonList(filtered);
        });
    });

    // 深色模式开关
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
        });
    }

    // 字体大小选择
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    if (fontSizeSelect) {
        fontSizeSelect.addEventListener('change', function() {
            const sizes = { small: '12px', medium: '14px', large: '16px' };
            document.body.style.fontSize = sizes[this.value];
        });
    }
}

// 切换Tab
function switchTab(tab) {
    currentTab = tab;
    
    // 更新页面显示
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page-${tab}`).classList.add('active');
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// 显示详情
function showDetail(type) {
    // 根据类型显示对应的分析页面
    switchTab('analysis');
    showModuleDetail(type === 'employed' ? 'overview' : type);
}

// 显示模块详情
function showModuleDetail(module) {
    currentAnalysisModule = module;
    
    // 更新分析页面内容
    const content = document.getElementById('analysis-content');
    if (!content) return;
    
    // 根据模块类型更新内容
    updateAnalysisContent(module);
}

// 更新分析页面内容
function updateAnalysisContent(module) {
    const content = document.getElementById('analysis-content');
    if (!content) return;
    
    const moduleConfigs = {
        age: {
            title: '年龄分布',
            summary: { value: '42.5', label: '平均年龄', rank: '第5/28' },
            chart: 'ageChart',
            tableData: [
                { label: '35岁以下', value: 98, percent: '21.5%' },
                { label: '36-45岁', value: 156, percent: '34.2%' },
                { label: '46-55岁', value: 142, percent: '31.1%' },
                { label: '55岁以上', value: 60, percent: '13.2%' },
            ]
        },
        gender: {
            title: '性别分布',
            summary: { value: '1.2:1', label: '男女比例', rank: '第8/28' },
            chart: 'genderChart',
            tableData: [
                { label: '男性', value: 248, percent: '54.4%' },
                { label: '女性', value: 208, percent: '45.6%' },
            ]
        },
        education: {
            title: '学历结构',
            summary: { value: '68%', label: '博士占比', rank: '第3/28' },
            chart: 'educationChart',
            tableData: [
                { label: '博士', value: 310, percent: '68%' },
                { label: '硕士', value: 98, percent: '21.5%' },
                { label: '本科及以下', value: 48, percent: '10.5%' },
            ]
        },
        title: {
            title: '职称结构',
            summary: { value: '45%', label: '高级职称占比', rank: '第4/28' },
            chart: 'titleChart',
            tableData: [
                { label: '正高', value: 45, percent: '9.9%' },
                { label: '副高', value: 160, percent: '35.1%' },
                { label: '中级', value: 180, percent: '39.5%' },
                { label: '初级', value: 71, percent: '15.6%' },
            ]
        },
        origin: {
            title: '学缘结构',
            summary: { value: '32%', label: '海外学缘占比', rank: '第2/28' },
            chart: 'originChart',
            tableData: [
                { label: '本校学缘', value: 89, percent: '19.5%' },
                { label: '国内学缘', value: 221, percent: '48.5%' },
                { label: '海外学缘', value: 146, percent: '32%' },
            ]
        },
        political: {
            title: '政治面貌',
            summary: { value: '58%', label: '党员占比', rank: '第6/28' },
            chart: 'politicalChart',
            tableData: [
                { label: '中共党员', value: 264, percent: '58%' },
                { label: '民主党派', value: 45, percent: '9.9%' },
                { label: '群众', value: 147, percent: '32.2%' },
            ]
        },
        retire: {
            title: '拟退预警',
            summary: { value: '15', label: '未来3年拟退', rank: '第10/28' },
            chart: 'retireChart',
            tableData: [
                { label: '未来1年', value: 5, percent: '' },
                { label: '未来2年', value: 4, percent: '' },
                { label: '未来3年', value: 6, percent: '' },
            ]
        },
        award: {
            title: '获奖情况',
            summary: { value: '28', label: '本年度获奖人次', rank: '第3/28' },
            chart: 'awardChart',
            tableData: [
                { label: '国家级', value: 8, percent: '28.6%' },
                { label: '省部级', value: 12, percent: '42.9%' },
                { label: '校级', value: 8, percent: '28.6%' },
            ]
        },
    };
    
    const config = moduleConfigs[module];
    if (!config) return;
    
    content.innerHTML = `
        <div class="analysis-header">
            <h2>${config.title}</h2>
            <select id="analysis-category-filter">
                <option value="all">全部人员</option>
                <option value="teacher">专任教师</option>
                <option value="staff">职员</option>
                <option value="contract">合同制</option>
                <option value="postdoc">博士后</option>
            </select>
        </div>
        
        <div class="analysis-summary">
            <div class="summary-item">
                <span class="summary-value">${config.summary.value}</span>
                <span class="summary-label">${config.summary.label}</span>
            </div>
            <div class="summary-item">
                <span class="summary-rank">${config.summary.rank}</span>
                <span class="summary-label">全校排名</span>
            </div>
        </div>

        <div class="chart-card">
            <canvas id="${config.chart}"></canvas>
        </div>

        <div class="data-table">
            <table>
                <thead>
                    <tr>
                        <th>类别</th>
                        <th>人数</th>
                        <th>占比</th>
                    </tr>
                </thead>
                <tbody>
                    ${config.tableData.map(item => `
                        <tr onclick="showPersonList('${module}', '${item.label}')">
                            <td>${item.label}</td>
                            <td>${item.value}</td>
                            <td>${item.percent}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="compare-section">
            <h3>全校对比</h3>
            <div class="compare-chart">
                <canvas id="compareChart"></canvas>
            </div>
        </div>
    `;
    
    // 重新初始化图表
    setTimeout(() => {
        initAnalysisChart(module);
    }, 100);
}

// 初始化分析图表
function initAnalysisChart(module) {
    const chartConfigs = {
        age: {
            type: 'bar',
            data: {
                labels: ['35岁以下', '36-45岁', '46-55岁', '55岁以上'],
                datasets: [{
                    label: '人数',
                    data: [98, 156, 142, 60],
                    backgroundColor: 'rgba(140, 21, 21, 0.8)',
                    borderRadius: 8,
                }]
            }
        },
        gender: {
            type: 'doughnut',
            data: {
                labels: ['男性', '女性'],
                datasets: [{
                    data: [248, 208],
                    backgroundColor: ['#8C1515', '#E8E8E8'],
                }]
            }
        },
        education: {
            type: 'doughnut',
            data: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{
                    data: [310, 98, 48],
                    backgroundColor: ['#8C1515', '#A52A2A', '#D4A5A5'],
                }]
            }
        },
        title: {
            type: 'bar',
            data: {
                labels: ['正高', '副高', '中级', '初级'],
                datasets: [{
                    label: '人数',
                    data: [45, 160, 180, 71],
                    backgroundColor: ['#8C1515', '#A52A2A', '#D4A5A5', '#F5F5F5'],
                    borderRadius: 8,
                }]
            }
        },
        origin: {
            type: 'doughnut',
            data: {
                labels: ['本校学缘', '国内学缘', '海外学缘'],
                datasets: [{
                    data: [89, 221, 146],
                    backgroundColor: ['#8C1515', '#1E3A5F', '#52C41A'],
                }]
            }
        },
        political: {
            type: 'doughnut',
            data: {
                labels: ['中共党员', '民主党派', '群众'],
                datasets: [{
                    data: [264, 45, 147],
                    backgroundColor: ['#8C1515', '#FAAD14', '#E8E8E8'],
                }]
            }
        },
        retire: {
            type: 'bar',
            data: {
                labels: ['未来1年', '未来2年', '未来3年'],
                datasets: [{
                    label: '人数',
                    data: [5, 4, 6],
                    backgroundColor: '#FAAD14',
                    borderRadius: 8,
                }]
            }
        },
        award: {
            type: 'doughnut',
            data: {
                labels: ['国家级', '省部级', '校级'],
                datasets: [{
                    data: [8, 12, 8],
                    backgroundColor: ['#8C1515', '#FAAD14', '#52C41A'],
                }]
            }
        },
    };
    
    const config = chartConfigs[module];
    if (!config) return;
    
    const canvasId = module + 'Chart';
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    new Chart(canvas.getContext('2d'), {
        type: config.type,
        data: config.data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    display: config.type === 'doughnut',
                }
            },
            scales: config.type === 'bar' ? {
                y: {
                    beginAtZero: true,
                }
            } : undefined,
        }
    });
}

// 显示人员列表
function showPersonList(module, category) {
    // 筛选对应类别的人员
    let filtered = mockData.persons;
    
    // 根据模块和类别筛选
    if (module === 'age') {
        // 年龄筛选逻辑
    } else if (module === 'title') {
        // 职称筛选逻辑
    }
    
    // 切换到名单页
    switchTab('list');
    
    // 更新筛选器状态
    const chips = document.querySelectorAll('.chip');
    chips.forEach(c => c.classList.remove('active'));
    
    // 渲染列表
    renderPersonList(filtered);
}

// 显示人员详情
function showPersonDetail(personId) {
    const person = mockData.persons.find(p => p.id === personId);
    if (!person) return;
    
    const modal = document.getElementById('person-detail-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = person.name + ' - 人员详情';
    body.innerHTML = `
        <div class="detail-card">
            <div class="detail-row">
                <span class="detail-label">姓名</span>
                <span class="detail-value">${person.name}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">职称/职位</span>
                <span class="detail-value">${person.title}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">最高学历</span>
                <span class="detail-value">${person.education}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">所属部门</span>
                <span class="detail-value">${person.department}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">来校时间</span>
                <span class="detail-value">${person.joinDate}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">联系电话</span>
                <span class="detail-value">${person.phone}</span>
            </div>
        </div>
        <div style="text-align: center; margin-top: 16px;">
            <button onclick="callPerson('${person.phone}')" style="
                background: #52C41A;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 14px;
                cursor: pointer;
            ">
                📞 拨打电话
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// 关闭弹窗
function closeModal() {
    document.getElementById('person-detail-modal').classList.remove('active');
}

// 拨打电话
function callPerson(phone) {
    // 在实际应用中，这会调用系统的拨号功能
    alert(`拨打电话: ${phone}`);
}

// 点击弹窗外部关闭
document.getElementById('person-detail-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
