// 模拟数据 - 学院
const collegeData = {
    persons: [
        { id: 1, name: '张伟', title: '教授', education: '博士', category: 'teacher', department: '经济学系', joinDate: '2005', talent: null, award: null },
        { id: 2, name: '李明', title: '副教授', education: '博士', category: 'teacher', department: '金融学系', joinDate: '2010', talent: null, award: '省部级' },
        { id: 3, name: '王芳', title: '讲师', education: '博士', category: 'teacher', department: '会计学系', joinDate: '2015', talent: null, award: null },
        { id: 4, name: '刘洋', title: '助理教授', education: '博士', category: 'teacher', department: '市场营销系', joinDate: '2018', talent: '青年人才', award: null },
        { id: 5, name: '陈静', title: '教授', education: '博士', category: 'teacher', department: '战略管理系', joinDate: '2002', talent: '杰青', award: '国家级' },
        { id: 6, name: '赵磊', title: '高级工程师', education: '硕士', category: 'staff', department: '信息中心', joinDate: '2008', talent: null, award: null },
        { id: 7, name: '孙丽', title: '会计师', education: '本科', category: 'staff', department: '财务室', joinDate: '2012', talent: null, award: '校级' },
        { id: 8, name: '周强', title: '合同制研究员', education: '博士', category: 'contract', department: '研究中心', joinDate: '2020', talent: null, award: null },
        { id: 9, name: '吴敏', title: '合同制助理', education: '硕士', category: 'contract', department: '行政办公室', joinDate: '2021', talent: null, award: null },
        { id: 10, name: '郑涛', title: '博士后', education: '博士', category: 'postdoc', department: '经济学系', joinDate: '2023', talent: null, award: null },
        { id: 11, name: '黄燕', title: '博士后', education: '博士', category: 'postdoc', department: '金融学系', joinDate: '2024', talent: null, award: null },
        { id: 12, name: '马骏', title: '教授', education: '博士', category: 'teacher', department: '金融学系', joinDate: '2000', talent: '长江学者', award: '国家级' },
        { id: 13, name: '高洁', title: '教授', education: '博士', category: 'teacher', department: '战略管理系', joinDate: '2003', talent: '杰青', award: '国家级' },
        { id: 14, name: '林峰', title: '教授', education: '博士', category: 'teacher', department: '经济学系', joinDate: '1990', talent: '院士', award: '国家级' },
        { id: 15, name: '何华', title: '副教授', education: '硕士', category: 'teacher', department: '会计学系', joinDate: '1995', talent: null, award: '省部级' },
    ],
    awardPersons: [
        { id: 14, name: '林峰', title: '教授', education: '博士', department: '经济学系', joinDate: '1990', talent: '院士', latestAwardLevel: '国家级', latestAwardDate: '2024-12-15' },
        { id: 12, name: '马骏', title: '教授', education: '博士', department: '金融学系', joinDate: '2000', talent: '长江学者', latestAwardLevel: '国家级', latestAwardDate: '2024-11-20' },
        { id: 5, name: '陈静', title: '教授', education: '博士', department: '战略管理系', joinDate: '2002', talent: '杰青', latestAwardLevel: '省部级', latestAwardDate: '2024-10-08' },
        { id: 13, name: '高洁', title: '教授', education: '博士', department: '战略管理系', joinDate: '2003', talent: '杰青', latestAwardLevel: '校级', latestAwardDate: '2024-09-10' },
        { id: 2, name: '李明', title: '副教授', education: '博士', department: '金融学系', joinDate: '2010', talent: null, latestAwardLevel: '省部级', latestAwardDate: '2024-08-25' },
        { id: 15, name: '何华', title: '副教授', education: '硕士', department: '会计学系', joinDate: '1995', talent: null, latestAwardLevel: '省部级', latestAwardDate: '2024-07-18' },
        { id: 7, name: '孙丽', title: '会计师', education: '本科', department: '财务室', joinDate: '2012', talent: null, latestAwardLevel: '校级', latestAwardDate: '2024-06-30' },
    ],
    awardDetails: {
        '林峰': [
            { awardName: '国家自然科学奖', projectName: '中国经济增长质量研究', awardDate: '2024-12-15', awardLevel: '国家级' },
            { awardName: '孙冶方经济科学奖', projectName: '中国经济发展新动能', awardDate: '2024-05-12', awardLevel: '国家级' },
            { awardName: '教育部科技进步奖', projectName: '数字经济创新研究', awardDate: '2023-11-08', awardLevel: '国家级' },
        ],
        '马骏': [
            { awardName: '教育部人文社科奖', projectName: '金融市场风险管理', awardDate: '2024-11-20', awardLevel: '国家级' },
            { awardName: '教育部科技进步奖', projectName: '金融科技风险预警系统', awardDate: '2024-04-08', awardLevel: '国家级' },
        ],
        '陈静': [
            { awardName: '北京市哲学社科奖', projectName: '企业战略管理创新', awardDate: '2024-10-08', awardLevel: '省部级' },
            { awardName: '北京市优秀成果奖', projectName: '企业管理现代化研究', awardDate: '2024-03-15', awardLevel: '省部级' },
        ],
        '高洁': [
            { awardName: '北京大学教学成果奖', projectName: '金融学课程体系改革', awardDate: '2024-09-10', awardLevel: '校级' },
        ],
        '李明': [
            { awardName: '中国经济学奖', projectName: '数字经济与产业转型', awardDate: '2024-08-25', awardLevel: '省部级' },
        ],
        '何华': [
            { awardName: '北京市优秀教师', projectName: '', awardDate: '2024-07-18', awardLevel: '省部级' },
        ],
        '孙丽': [
            { awardName: '北京大学优秀教育工作者', projectName: '', awardDate: '2024-06-30', awardLevel: '校级' },
        ],
    },
    // 学院分析维度数据
    analysisConfigs: {
        age: {
            title: '年龄分布',
            summary: { value: '42.5', label: '平均年龄' },
            chartType: 'bar',
            chartData: {
                labels: ['35岁以下', '36-45岁', '46-55岁', '55岁以上'],
                datasets: [{ label: '人数', data: [98, 156, 142, 60], backgroundColor: '#8C1515', borderRadius: 6 }]
            },
            tableData: [
                { label: '35岁以下', value: 98, percent: '21.5%' },
                { label: '36-45岁', value: 156, percent: '34.2%' },
                { label: '46-55岁', value: 142, percent: '31.1%' },
                { label: '55岁以上', value: 60, percent: '13.2%' },
            ]
        },
        gender: {
            title: '性别分布',
            summary: { value: '1.2:1', label: '男女比例' },
            chartType: 'doughnut',
            chartData: {
                labels: ['男性', '女性'],
                datasets: [{ data: [248, 208], backgroundColor: ['#1E3A5F', '#D97706'], borderWidth: 0 }]
            },
            tableData: [
                { label: '男性', value: 248, percent: '54.4%' },
                { label: '女性', value: 208, percent: '45.6%' },
            ]
        },
        education: {
            title: '学历结构',
            summary: { value: '68%', label: '博士占比' },
            chartType: 'doughnut',
            chartData: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{ data: [310, 98, 48], backgroundColor: ['#8C1515', '#1E3A5F', '#9CA3AF'], borderWidth: 0 }]
            },
            tableData: [
                { label: '博士', value: 310, percent: '68%' },
                { label: '硕士', value: 98, percent: '21.5%' },
                { label: '本科及以下', value: 48, percent: '10.5%' },
            ]
        },
        title: {
            title: '职称结构',
            summary: { value: '45%', label: '高级职称占比' },
            chartType: 'bar',
            chartData: {
                labels: ['正高', '副高', '中级', '初级'],
                datasets: [{ label: '人数', data: [45, 160, 180, 71], backgroundColor: ['#8C1515', '#A52A2A', '#D97706', '#9CA3AF'], borderRadius: 6 }]
            },
            tableData: [
                { label: '正高', value: 45, percent: '9.9%' },
                { label: '副高', value: 160, percent: '35.1%' },
                { label: '中级', value: 180, percent: '39.5%' },
                { label: '初级', value: 71, percent: '15.6%' },
            ]
        },
        origin: {
            title: '学缘结构',
            summary: { value: '32%', label: '海外学缘占比' },
            chartType: 'doughnut',
            chartData: {
                labels: ['本校学缘', '国内学缘', '海外学缘'],
                datasets: [{ data: [89, 221, 146], backgroundColor: ['#8C1515', '#1E3A5F', '#16A34A'], borderWidth: 0 }]
            },
            tableData: [
                { label: '本校学缘', value: 89, percent: '19.5%' },
                { label: '国内学缘', value: 221, percent: '48.5%' },
                { label: '海外学缘', value: 146, percent: '32%' },
            ]
        },
        political: {
            title: '政治面貌',
            summary: { value: '58%', label: '党员占比' },
            chartType: 'doughnut',
            chartData: {
                labels: ['中共党员', '民主党派', '群众'],
                datasets: [{ data: [264, 45, 147], backgroundColor: ['#8C1515', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            tableData: [
                { label: '中共党员', value: 264, percent: '58%' },
                { label: '民主党派', value: 45, percent: '9.9%' },
                { label: '群众', value: 147, percent: '32.2%' },
            ]
        },
        talent: {
            title: '人才分布',
            summary: { value: '45', label: '人才总数' },
            chartType: 'bar',
            chartData: {
                labels: ['院士', '长江学者', '杰青', '青年人才'],
                datasets: [{ label: '人数', data: [3, 8, 12, 22], backgroundColor: '#8C1515', borderRadius: 6 }]
            },
            tableData: [
                { label: '院士', value: 3, percent: '6.7%' },
                { label: '长江学者', value: 8, percent: '17.8%' },
                { label: '杰青', value: 12, percent: '26.7%' },
                { label: '青年人才', value: 22, percent: '48.9%' },
            ]
        },
        award: {
            title: '获奖分析',
            summary: { value: '28', label: '本年获奖人次' },
            chartType: 'doughnut',
            chartData: {
                labels: ['国家级', '省部级', '校级'],
                datasets: [{ data: [8, 12, 8], backgroundColor: ['#8C1515', '#D97706', '#16A34A'], borderWidth: 0 }]
            },
            tableData: [
                { label: '国家级', value: 8, percent: '28.6%' },
                { label: '省部级', value: 12, percent: '42.9%' },
                { label: '校级', value: 8, percent: '28.6%' },
            ]
        },
    }
};

// 模拟数据 - 职能部门（计算中心）
const departmentData = {
    persons: [
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', category: 'staff', department: '计算中心', joinDate: '2000', talent: null, award: '国家级' },
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', category: 'staff', department: '计算中心', joinDate: '2005', talent: null, award: '省部级' },
        { id: 3, name: '张明', title: '工程师', education: '硕士', category: 'staff', department: '计算中心', joinDate: '2012', talent: null, award: null },
        { id: 4, name: '刘芳', title: '助理工程师', education: '本科', category: 'staff', department: '计算中心', joinDate: '2018', talent: null, award: null },
        { id: 5, name: '陈伟', title: '高级工程师', education: '硕士', category: 'staff', department: '计算中心', joinDate: '2008', talent: null, award: null },
        { id: 6, name: '赵敏', title: '工程师', education: '本科', category: 'staff', department: '计算中心', joinDate: '2015', talent: null, award: null },
        { id: 7, name: '周强', title: '助理工程师', education: '本科', category: 'staff', department: '计算中心', joinDate: '2020', talent: null, award: null },
        { id: 8, name: '吴丽', title: '合同制工程师', education: '硕士', category: 'contract', department: '计算中心', joinDate: '2021', talent: null, award: null },
        { id: 9, name: '郑涛', title: '合同制助理', education: '本科', category: 'contract', department: '计算中心', joinDate: '2022', talent: null, award: null },
        { id: 10, name: '黄燕', title: '合同制助理', education: '本科', category: 'contract', department: '计算中心', joinDate: '2023', talent: null, award: null },
    ],
    awardPersons: [
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', department: '计算中心', joinDate: '2000', talent: null, latestAwardLevel: '国家级', latestAwardDate: '2024-11-10' },
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', department: '计算中心', joinDate: '2005', talent: null, latestAwardLevel: '省部级', latestAwardDate: '2024-07-15' },
    ],
    awardDetails: {
        '王建国': [
            { awardName: '教育部科技进步奖', projectName: '校园信息化平台建设', awardDate: '2024-11-10', awardLevel: '国家级' },
            { awardName: '北京市信息化优秀成果奖', projectName: '教务管理系统升级', awardDate: '2023-09-15', awardLevel: '省部级' },
        ],
        '李秀英': [
            { awardName: '北京市信息化优秀成果奖', projectName: '数据分析系统开发', awardDate: '2024-07-15', awardLevel: '省部级' },
        ],
    },
    // 部门分析维度数据（计算中心）
    analysisConfigs: {
        'dept-age': {
            title: '年龄分布',
            summary: { value: '42.5', label: '平均年龄' },
            chartType: 'bar',
            chartData: {
                labels: ['35岁以下', '36-45岁', '46-55岁', '55岁以上'],
                datasets: [{ label: '人数', data: [3, 4, 2, 1], backgroundColor: '#1E3A5F', borderRadius: 6 }]
            },
            tableData: [
                { label: '35岁以下', value: 3, percent: '30%' },
                { label: '36-45岁', value: 4, percent: '40%' },
                { label: '46-55岁', value: 2, percent: '20%' },
                { label: '55岁以上', value: 1, percent: '10%' },
            ]
        },
        'dept-gender': {
            title: '性别分布',
            summary: { value: '1.5:1', label: '男女比例' },
            chartType: 'doughnut',
            chartData: {
                labels: ['男性', '女性'],
                datasets: [{ data: [6, 4], backgroundColor: ['#1E3A5F', '#D97706'], borderWidth: 0 }]
            },
            tableData: [
                { label: '男性', value: 6, percent: '60%' },
                { label: '女性', value: 4, percent: '40%' },
            ]
        },
        'dept-education': {
            title: '学历结构',
            summary: { value: '30%', label: '博士占比' },
            chartType: 'doughnut',
            chartData: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{ data: [3, 4, 3], backgroundColor: ['#1E3A5F', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            tableData: [
                { label: '博士', value: 3, percent: '30%' },
                { label: '硕士', value: 4, percent: '40%' },
                { label: '本科及以下', value: 3, percent: '30%' },
            ]
        },
        'dept-title': {
            title: '职称结构',
            summary: { value: '40%', label: '高级职称占比' },
            chartType: 'bar',
            chartData: {
                labels: ['正高', '副高', '中级', '初级'],
                datasets: [{ label: '人数', data: [1, 3, 4, 2], backgroundColor: ['#1E3A5F', '#A52A2A', '#D97706', '#9CA3AF'], borderRadius: 6 }]
            },
            tableData: [
                { label: '正高', value: 1, percent: '10%' },
                { label: '副高', value: 3, percent: '30%' },
                { label: '中级', value: 4, percent: '40%' },
                { label: '初级', value: 2, percent: '20%' },
            ]
        },
        'dept-political': {
            title: '政治面貌',
            summary: { value: '40%', label: '党员占比' },
            chartType: 'doughnut',
            chartData: {
                labels: ['中共党员', '民主党派', '群众'],
                datasets: [{ data: [4, 1, 5], backgroundColor: ['#1E3A5F', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            tableData: [
                { label: '中共党员', value: 4, percent: '40%' },
                { label: '民主党派', value: 1, percent: '10%' },
                { label: '群众', value: 5, percent: '50%' },
            ]
        },
        'dept-type': {
            title: '用工类型',
            summary: { value: '10', label: '在职总人数' },
            chartType: 'doughnut',
            chartData: {
                labels: ['职员', '合同制'],
                datasets: [{ data: [7, 3], backgroundColor: ['#1E3A5F', '#D97706'], borderWidth: 0 }]
            },
            tableData: [
                { label: '职员', value: 7, percent: '70%' },
                { label: '合同制', value: 3, percent: '30%' },
            ]
        },
    }
};

// 当前状态
let currentTab = 'home';
let currentAnalysisTab = 'age';
let currentType = 'all';
let currentUnitType = 'college'; // 'college' or 'department'
let currentCollege = '光华管理学院';
let collegeCharts = {};
let departmentCharts = {};
let currentAnalysisChart = null;

// 有数据的单位列表
const unitsWithData = {
    'college': ['光华管理学院'],
    'department': ['计算中心']
};

// 获取当天早上5点的更新时间
function getDataUpdateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day} 05:00`;
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('update-time').textContent = getDataUpdateTime();
    
    // 初始化人员列表
    initPersonList();
    
    // 初始化事件监听
    initEventListeners();
    
    // 初始化当前单位类型的分析内容
    initAnalysisContent();
    
    // 延迟初始化图表，确保DOM已渲染
    setTimeout(() => {
        initCollegeCharts();
    }, 100);
});

// 初始化图表
function initCharts() {
    // 学院图表
    initCollegeCharts();
    // 部门图表
    initDepartmentCharts();
}

function initCollegeCharts() {
    // 检查是否已经初始化过
    if (collegeCharts.trend1) return;
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false
    };
    
    // 近5年在职人数变化趋势（双线图）
    const trendCtx1 = document.getElementById('college-trendChart1');
    if (trendCtx1) {
        try {
            collegeCharts.trend1 = new Chart(trendCtx1.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '教职工总数', data: [420, 432, 445, 448, 456], borderColor: '#8C1515', backgroundColor: 'rgba(140, 21, 21, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#8C1515' },
                        { label: '专任教师', data: [210, 215, 220, 228, 234], borderColor: '#1E3A5F', backgroundColor: 'rgba(30, 58, 95, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#1E3A5F' }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: false, min: 180, max: 480, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 近5年教职工博士学历占比趋势
    const trendCtx2 = document.getElementById('college-trendChart2');
    if (trendCtx2) {
        try {
            collegeCharts.trend2 = new Chart(trendCtx2.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [{ label: '博士占比', data: [62, 64, 65, 67, 68], borderColor: '#1E3A5F', backgroundColor: 'rgba(30, 58, 95, 0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#1E3A5F' }]
                },
                options: { ...chartOptions, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 55, max: 75, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 近5年高层次人才变化（分组柱状图）
    const trendCtx3 = document.getElementById('college-trendChart3');
    if (trendCtx3) {
        try {
            collegeCharts.trend3 = new Chart(trendCtx3.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '院士', data: [2, 2, 3, 3, 3], backgroundColor: '#8C1515', borderRadius: 4 },
                        { label: '长江学者', data: [6, 7, 7, 8, 8], backgroundColor: '#D97706', borderRadius: 4 },
                        { label: '杰青', data: [10, 11, 11, 12, 12], backgroundColor: '#16A34A', borderRadius: 4 },
                        { label: '青年人才', data: [17, 18, 19, 19, 22], backgroundColor: '#3B82F6', borderRadius: 4 }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }, scales: { y: { beginAtZero: true, stacked: false, grid: { color: '#F3F4F6' } }, x: { stacked: false, grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 近5年获奖人次变化（堆叠柱状图）
    const trendCtx4 = document.getElementById('college-trendChart4');
    if (trendCtx4) {
        try {
            collegeCharts.trend4 = new Chart(trendCtx4.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '国家级', data: [5, 6, 5, 7, 8], backgroundColor: '#8C1515', borderRadius: 4 },
                        { label: '省部级', data: [8, 9, 10, 11, 12], backgroundColor: '#D97706', borderRadius: 4 },
                        { label: '校级', data: [5, 7, 5, 7, 8], backgroundColor: '#16A34A', borderRadius: 4 }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }, scales: { y: { beginAtZero: true, stacked: true, grid: { color: '#F3F4F6' } }, x: { stacked: true, grid: { display: false } } } }
            });
        } catch (e) {}
    }
}

function initDepartmentCharts() {
    // 检查是否已经初始化过
    if (departmentCharts.trend1) return;
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false
    };
    
    // 近5年在职人数变化趋势
    const trendCtx1 = document.getElementById('dept-trendChart1');
    if (trendCtx1) {
        try {
            departmentCharts.trend1 = new Chart(trendCtx1.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [{ label: '在职人数', data: [8, 8, 9, 9, 10], borderColor: '#1E3A5F', backgroundColor: 'rgba(30, 58, 95, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#1E3A5F' }]
                },
                options: { ...chartOptions, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 6, max: 12, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 近5年用工类型变化（分组柱状图）
    const trendCtx2 = document.getElementById('dept-trendChart2');
    if (trendCtx2) {
        try {
            departmentCharts.trend2 = new Chart(trendCtx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '职员', data: [5, 5, 6, 6, 7], backgroundColor: '#1E3A5F', borderRadius: 4 },
                        { label: '合同制', data: [3, 3, 3, 3, 3], backgroundColor: '#D97706', borderRadius: 4 }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }, scales: { y: { beginAtZero: true, stacked: true, grid: { color: '#F3F4F6' } }, x: { stacked: true, grid: { display: false } } } }
            });
        } catch (e) {}
    }
}

// 切换到分析Tab时初始化图表
function initChartsForAnalysisTab() {
    if (currentUnitType === 'college') {
        initCollegeCharts();
    } else {
        initDepartmentCharts();
    }
}

// 重置所有图表
function resetAllCharts() {
    // 销毁学院图表
    Object.values(collegeCharts).forEach(chart => {
        if (chart) chart.destroy();
    });
    collegeCharts = {};
    
    // 销毁部门图表
    Object.values(departmentCharts).forEach(chart => {
        if (chart) chart.destroy();
    });
    departmentCharts = {};
    
    // 销毁分析图表
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    // 清空分析内容容器
    const collegeContent = document.getElementById('analysis-content-college');
    const deptContent = document.getElementById('analysis-content-department');
    if (collegeContent) collegeContent.innerHTML = '';
    if (deptContent) deptContent.innerHTML = '';
}

// 渲染部门获奖人员名单
function renderDeptAwardWinners() {
    const container = document.getElementById('dept-award-winners');
    if (!container) return;
    
    const awardWinners = departmentData.awardPersons;
    
    const getLevelClass = (level) => {
        if (level === '国家级') return 'level-national';
        if (level === '省部级') return 'level-provincial';
        return 'level-school';
    };
    
    container.innerHTML = awardWinners.map(person => `
        <div class="person-item" onclick="showAwardDetail('${person.name}', 'department')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="award-level-badge ${getLevelClass(person.latestAwardLevel)}">${person.latestAwardLevel}</span>
                </div>
                <div class="person-detail">${person.title} · ${person.education}</div>
                <div class="award-date-info">获奖时间：${person.latestAwardDate}</div>
            </div>
        </div>
    `).join('');
}

// 初始化分析内容
function initAnalysisContent() {
    // 只在分析Tab可见时初始化
    if (currentTab !== 'analysis') return;
    
    // 只初始化当前单位类型的分析内容
    if (currentUnitType === 'college') {
        showAnalysisTab('age');
    } else {
        showAnalysisTab('dept-age');
    }
}

// 显示分析Tab
function showAnalysisTab(tab) {
    currentAnalysisTab = tab;
    
    // 更新Tab状态
    const tabContainer = currentUnitType === 'college' ? 
        document.querySelectorAll('#page-analysis-college .tab-item') :
        document.querySelectorAll('#page-analysis-department .tab-item');
    
    tabContainer.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tab) {
            item.classList.add('active');
        }
    });
    
    const contentId = currentUnitType === 'college' ? 'analysis-content-college' : 'analysis-content-department';
    const content = document.getElementById(contentId);
    if (!content) return;
    
    const data = currentUnitType === 'college' ? collegeData : departmentData;
    const config = data.analysisConfigs[tab];
    if (!config) return;
    
    // 使用不同的canvas ID避免冲突
    const canvasId = currentUnitType === 'college' ? 'collegeAnalysisChart' : 'deptAnalysisChart';
    
    content.innerHTML = `
        <div class="analysis-summary">
            <div class="summary-item">
                <span class="summary-value">${config.summary.value}</span>
                <span class="summary-label">${config.summary.label}</span>
            </div>
        </div>
        <div class="chart-card">
            <canvas id="${canvasId}"></canvas>
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
                        <tr onclick="showPersonList('${tab}', '${item.label}')">
                            <td>${item.label}</td>
                            <td>${item.value}</td>
                            <td>${item.percent}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        ${tab === 'age' || tab === 'dept-age' ? `
        <div class="age-alert-grid">
            <div class="age-alert-item">
                <div class="age-alert-label">35岁以下占比</div>
                <div class="age-alert-value">${tab === 'age' ? '21.5%' : '27.3%'}</div>
                <div class="age-alert-status good">健康</div>
            </div>
            <div class="age-alert-item">
                <div class="age-alert-label">55岁以上占比</div>
                <div class="age-alert-value">${tab === 'age' ? '13.2%' : '14.8%'}</div>
                <div class="age-alert-status good">正常</div>
            </div>
        </div>
        ` : ''}
    `;
    
    // 等待DOM完全渲染后初始化图表
    const initChart = () => {
        // 从content容器中查找canvas，避免找到其他页面的canvas
        const canvas = content.querySelector('canvas');
        if (!canvas) return;
        
        if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
            setTimeout(initChart, 50);
            return;
        }
        
        createAnalysisChart(canvas, config);
    };
    
    requestAnimationFrame(() => requestAnimationFrame(initChart));
}

function createAnalysisChart(canvas, config) {
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    try {
        currentAnalysisChart = new Chart(canvas.getContext('2d'), {
            type: config.chartType,
            data: config.chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                cutout: config.chartType === 'doughnut' ? '60%' : undefined,
                plugins: {
                    legend: {
                        display: config.chartType === 'doughnut',
                        position: 'bottom',
                        labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } }
                    }
                },
                scales: config.chartType === 'bar' ? {
                    y: { beginAtZero: true, grid: { color: '#F3F4F6' } },
                    x: { grid: { display: false } }
                } : undefined,
            }
        });
    } catch (e) {}
}

// 初始化人员列表
function initPersonList() {
    renderPersonList(collegeData.persons);
    renderDepartmentPersonList(departmentData.persons);
}

// 渲染人员列表 - 学院
function renderPersonList(persons) {
    const container = document.getElementById('person-list');
    if (!container) return;
    
    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showPersonDetail(${person.id}, 'college')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    ${person.talent ? `<span class="person-tag">${person.talent}</span>` : ''}
                </div>
                <div class="person-detail">${person.title} · ${person.education} · ${person.department}</div>
            </div>
        </div>
    `).join('');
}

// 渲染人员列表 - 部门
function renderDepartmentPersonList(persons) {
    const container = document.getElementById('person-list-dept');
    if (!container) return;
    
    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showPersonDetail(${person.id}, 'department')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    ${person.talent ? `<span class="person-tag">${person.talent}</span>` : ''}
                </div>
                <div class="person-detail">${person.title} · ${person.education} · ${person.department}</div>
            </div>
        </div>
    `).join('');
}

// 渲染获奖人员列表 - 学院
function renderAwardList(persons) {
    const container = document.getElementById('award-list');
    if (!container) return;
    
    const getLevelClass = (level) => {
        if (level === '国家级') return 'level-national';
        if (level === '省部级') return 'level-provincial';
        return 'level-school';
    };
    
    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showAwardDetail('${person.name}', 'college')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="award-level-badge ${getLevelClass(person.latestAwardLevel)}">${person.latestAwardLevel}</span>
                </div>
                <div class="person-detail">${person.title} · ${person.education} · ${person.department}</div>
                <div class="award-date-info">最近获奖：${person.latestAwardDate}</div>
            </div>
        </div>
    `).join('');
}

// 渲染获奖人员列表 - 部门
function renderDepartmentAwardList(persons) {
    const container = document.getElementById('award-list-dept');
    if (!container) return;
    
    const getLevelClass = (level) => {
        if (level === '国家级') return 'level-national';
        if (level === '省部级') return 'level-provincial';
        return 'level-school';
    };
    
    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showAwardDetail('${person.name}', 'department')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="award-level-badge ${getLevelClass(person.latestAwardLevel)}">${person.latestAwardLevel}</span>
                </div>
                <div class="person-detail">${person.title} · ${person.education} · ${person.department}</div>
                <div class="award-date-info">最近获奖：${person.latestAwardDate}</div>
            </div>
        </div>
    `).join('');
}

// 显示获奖人员详情
function showAwardDetail(personName, unitType) {
    const data = unitType === 'college' ? collegeData : departmentData;
    const person = data.awardPersons.find(p => p.name === personName);
    const awards = data.awardDetails[personName] || [];
    
    if (!person) return;
    
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    const getLevelClass = (level) => {
        if (level === '国家级') return 'level-national';
        if (level === '省部级') return 'level-provincial';
        return 'level-school';
    };
    
    title.textContent = person.name + ' - 详情';
    body.innerHTML = `
        <div class="detail-card">
            <div class="detail-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" style="vertical-align: middle; margin-right: 4px;">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                人事信息
            </div>
            <div class="detail-row">
                <span class="detail-label">姓名</span>
                <span class="detail-value">${person.name}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">职称</span>
                <span class="detail-value">${person.title}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">学历</span>
                <span class="detail-value">${person.education}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">部门</span>
                <span class="detail-value">${person.department}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">来校时间</span>
                <span class="detail-value">${person.joinDate}年</span>
            </div>
            ${person.talent ? `
            <div class="detail-row">
                <span class="detail-label">人才类别</span>
                <span class="detail-value">${person.talent}</span>
            </div>
            ` : ''}
        </div>
        
        <div class="detail-card">
            <div class="detail-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" style="vertical-align: middle; margin-right: 4px;">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                获奖明细（${awards.length}项）
            </div>
            ${awards.map(award => `
                <div class="award-detail-item">
                    <div class="award-detail-header">
                        <span class="award-level-badge ${getLevelClass(award.awardLevel)}">${award.awardLevel}</span>
                        <span class="award-detail-date">${award.awardDate}</span>
                    </div>
                    <div class="award-detail-name">${award.awardName}</div>
                    ${award.projectName ? `<div class="award-detail-project">${award.projectName}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

// 初始化事件监听
function initEventListeners() {
    // 搜索框 - 学院
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterPersonList();
        });
    }
    
    // 搜索框 - 部门
    const searchInputDept = document.getElementById('search-input-dept');
    if (searchInputDept) {
        searchInputDept.addEventListener('input', function(e) {
            filterDepartmentPersonList();
        });
    }
    
    // 类型筛选 - 学院
    document.querySelectorAll('#page-list-college .type-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('#page-list-college .type-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentType = this.dataset.type;
            filterPersonList();
        });
    });
    
    // 类型筛选 - 部门
    document.querySelectorAll('#page-list-department .type-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('#page-list-department .type-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentType = this.dataset.type;
            filterDepartmentPersonList();
        });
    });
    
    // 分析Tab切换 - 学院
    document.querySelectorAll('#page-analysis-college .tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            showAnalysisTab(this.dataset.tab);
        });
    });
    
    // 分析Tab切换 - 部门
    document.querySelectorAll('#page-analysis-department .tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            showAnalysisTab(this.dataset.tab);
        });
    });
}

// 过滤人员列表 - 学院
function filterPersonList() {
    const keyword = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    const personList = document.getElementById('person-list');
    const awardList = document.getElementById('award-list');
    
    if (currentType === 'award') {
        personList.style.display = 'none';
        awardList.style.display = 'block';
        
        let filteredAwardPersons = collegeData.awardPersons;
        if (keyword) {
            filteredAwardPersons = filteredAwardPersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.department.toLowerCase().includes(keyword)
            );
        }
        renderAwardList(filteredAwardPersons);
        return;
    }
    
    personList.style.display = 'block';
    awardList.style.display = 'none';
    
    let filtered = collegeData.persons;
    
    if (currentType === 'talent') {
        filtered = filtered.filter(p => p.talent);
    } else if (currentType === 'person') {
        filtered = filtered.filter(p => !p.talent);
    }
    
    if (keyword) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(keyword) ||
            p.title.toLowerCase().includes(keyword) ||
            p.education.toLowerCase().includes(keyword)
        );
    }
    
    renderPersonList(filtered);
}

// 过滤人员列表 - 部门
function filterDepartmentPersonList() {
    const keyword = document.getElementById('search-input-dept')?.value.toLowerCase() || '';
    
    const personList = document.getElementById('person-list-dept');
    const awardList = document.getElementById('award-list-dept');
    
    if (currentType === 'award') {
        personList.style.display = 'none';
        awardList.style.display = 'block';
        
        let filteredAwardPersons = departmentData.awardPersons;
        if (keyword) {
            filteredAwardPersons = filteredAwardPersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.department.toLowerCase().includes(keyword)
            );
        }
        renderDepartmentAwardList(filteredAwardPersons);
        return;
    }
    
    personList.style.display = 'block';
    awardList.style.display = 'none';
    
    let filtered = departmentData.persons;
    
    if (keyword) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(keyword) ||
            p.title.toLowerCase().includes(keyword) ||
            p.education.toLowerCase().includes(keyword)
        );
    }
    
    renderDepartmentPersonList(filtered);
}

// 切换Tab
function switchTab(tab, subType) {
    currentTab = tab;
    
    // 隐藏所有页面 - 移除active类
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 根据单位类型和tab显示对应页面
    const pageId = `page-${tab}-${currentUnitType}`;
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    // 通过索引匹配导航项
    const navItems = document.querySelectorAll('.nav-item');
    const tabOrder = ['home', 'analysis', 'insight', 'list'];
    const tabIndex = tabOrder.indexOf(tab);
    if (tabIndex >= 0 && navItems[tabIndex]) {
        navItems[tabIndex].classList.add('active');
    }
    
    // 切换Tab后滚动到顶部
    window.scrollTo(0, 0);
    
    // 如果切换到分析Tab，确保分析内容和图表已初始化
    if (tab === 'analysis') {
        // 先清空当前内容，再重新初始化
        const contentId = currentUnitType === 'college' ? 'analysis-content-college' : 'analysis-content-department';
        const content = document.getElementById(contentId);
        if (content) content.innerHTML = '';
        
        // 使用双重requestAnimationFrame确保页面完全显示后再初始化
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (currentUnitType === 'college') {
                    showAnalysisTab('age');
                    initCollegeCharts();
                } else {
                    showAnalysisTab('dept-age');
                    initDepartmentCharts();
                }
            });
        });
    }
    
    // 如果有子类型，更新筛选
    if (subType && tab === 'list') {
        currentType = subType;
        if (currentUnitType === 'college') {
            document.querySelectorAll('#page-list-college .type-chip').forEach(chip => {
                chip.classList.remove('active');
                if (chip.dataset.type === subType) {
                    chip.classList.add('active');
                }
            });
            filterPersonList();
        } else {
            document.querySelectorAll('#page-list-department .type-chip').forEach(chip => {
                chip.classList.remove('active');
                if (chip.dataset.type === subType) {
                    chip.classList.add('active');
                }
            });
            filterDepartmentPersonList();
        }
    }
}

// 显示详情
function showDetail(type) {
    switchTab('list');
    if (type === 'talent') {
        currentType = 'talent';
    } else if (type === 'award') {
        currentType = 'award';
    } else {
        currentType = 'all';
    }
    
    if (currentUnitType === 'college') {
        document.querySelectorAll('#page-list-college .type-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.type === currentType) {
                chip.classList.add('active');
            }
        });
        filterPersonList();
    } else {
        document.querySelectorAll('#page-list-department .type-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.type === currentType) {
                chip.classList.add('active');
            }
        });
        filterDepartmentPersonList();
    }
}

// 显示人员列表（从分析页下钻）
function showPersonList(module, category) {
    switchTab('list');
    currentType = 'all';
    
    if (currentUnitType === 'college') {
        document.querySelectorAll('#page-list-college .type-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.type === 'all') {
                chip.classList.add('active');
            }
        });
        filterPersonList();
    } else {
        document.querySelectorAll('#page-list-department .type-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.type === 'all') {
                chip.classList.add('active');
            }
        });
        filterDepartmentPersonList();
    }
}

// 显示人员详情
function showPersonDetail(personId, unitType) {
    const data = unitType === 'college' ? collegeData : departmentData;
    const person = data.persons.find(p => p.id === personId);
    if (!person) return;
    
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = person.name + ' - 详情';
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
                <span class="detail-value">${person.joinDate}年</span>
            </div>
            ${person.talent ? `
            <div class="detail-row">
                <span class="detail-label">人才类别</span>
                <span class="detail-value">${person.talent}</span>
            </div>
            ` : ''}
            ${person.award ? `
            <div class="detail-row">
                <span class="detail-label">获奖情况</span>
                <span class="detail-value">${person.award}</span>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

// 切换学院下拉框
function toggleCollegeDropdown() {
    const dropdown = document.getElementById('collegeDropdown');
    dropdown.classList.toggle('active');
}

// 选择学院/部门
function selectCollege(college, type) {
    currentCollege = college;
    currentUnitType = type === 'college' ? 'college' : 'department';
    
    // 更新页面显示
    document.getElementById('unit-name').textContent = college;
    document.getElementById('unit-type-badge').textContent = type === 'college' ? '二级学院' : '职能部门';
    
    // 更新下拉框选中状态
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('active');
        if (item.textContent === college) {
            item.classList.add('active');
        }
    });
    
    // 关闭下拉框
    document.getElementById('collegeDropdown').classList.remove('active');
    
    // 检查该单位是否有数据
    const hasData = unitsWithData[currentUnitType]?.includes(college);
    
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    if (!hasData) {
        // 没有数据显示"暂无数据"页面
        document.getElementById('page-no-data').style.display = 'block';
        document.getElementById('page-no-data').classList.add('active');
    } else {
        // 有数据显示对应页面
        document.getElementById('page-no-data').style.display = 'none';
        
        // 重置所有图表
        resetAllCharts();
        
        switchTab('home');
    }
}

// 点击外部关闭下拉框
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('collegeDropdown');
    const selector = document.querySelector('.college-selector');
    if (dropdown && !selector.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// 显示引才质量指数说明
function showQualityInfo() {
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = '引才质量指数说明';
    body.innerHTML = `
        <div class="detail-card">
            <div class="detail-row">
                <span class="detail-label">计算公式</span>
                <span class="detail-value" style="font-size: 12px;">博士占比×0.3 + 海外学缘占比×0.3 + 高层次人才占比×0.4</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">数据范围</span>
                <span class="detail-value">全院在职人员</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">评分标准</span>
                <span class="detail-value">0-100分</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">排名依据</span>
                <span class="detail-value">多学院横向对比</span>
            </div>
        </div>
        <div style="padding: 12px; background: #F9FAFB; border-radius: 8px; font-size: 13px; color: #6B7280;">
            <strong>指标说明：</strong><br>
            • 博士占比：具有博士学位人员占总人数比例<br>
            • 海外学缘：最后学历在海外院校获得的比例<br>
            • 高层次人才：院士、长江学者、杰青、青年人才等
        </div>
    `;
    
    modal.classList.add('active');
}

// 关闭弹窗
function closeModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

// 点击弹窗外部关闭
document.getElementById('detail-modal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
