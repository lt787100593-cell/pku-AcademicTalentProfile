// 模拟数据 - 学院
const collegeData = {
    persons: [
        { id: 1, name: '张伟', title: '教授', education: '博士', category: 'teacher', joinDate: '2005-09-01', gender: '男', birthDate: '1975-06-15', talent: null },
        { id: 2, name: '李明', title: '副教授', education: '博士', category: 'teacher', joinDate: '2010-07-20', gender: '男', birthDate: '1980-03-22', talent: null },
        { id: 3, name: '王芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2015-08-10', gender: '女', birthDate: '1985-11-08', talent: null },
        { id: 4, name: '刘洋', title: '助理教授', education: '博士', category: 'teacher', joinDate: '2018-09-05', gender: '男', birthDate: '1988-07-18', talent: '青年人才' },
        { id: 5, name: '陈静', title: '教授', education: '博士', category: 'teacher', joinDate: '2002-03-15', gender: '女', birthDate: '1972-04-25', talent: '杰青' },
        { id: 6, name: '赵磊', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2008-06-01', gender: '男', birthDate: '1978-09-12', talent: null },
        { id: 7, name: '孙丽', title: '会计师', education: '本科', category: 'staff', joinDate: '2012-04-10', gender: '女', birthDate: '1982-12-05', talent: null },
        { id: 8, name: '周强', title: '合同制研究员', education: '博士', category: 'contract', joinDate: '2020-07-15', gender: '男', birthDate: '1990-02-28', talent: null },
        { id: 9, name: '吴敏', title: '合同制助理', education: '硕士', category: 'contract', joinDate: '2021-08-20', gender: '女', birthDate: '1992-05-16', talent: null },
        { id: 10, name: '郑涛', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2023-09-01', gender: '男', birthDate: '1993-10-08', talent: null },
        { id: 11, name: '黄燕', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-01-10', gender: '女', birthDate: '1994-08-22', talent: null },
        { id: 12, name: '马骏', title: '教授', education: '博士', category: 'teacher', joinDate: '2000-03-01', gender: '男', birthDate: '1968-05-15', talent: '长江学者' },
        { id: 13, name: '高洁', title: '教授', education: '博士', category: 'teacher', joinDate: '2003-07-01', gender: '女', birthDate: '1973-09-20', talent: '杰青' },
        { id: 14, name: '林峰', title: '教授', education: '博士', category: 'teacher', joinDate: '1990-09-01', gender: '男', birthDate: '1960-03-10', talent: '院士' },
        { id: 15, name: '何华', title: '副教授', education: '硕士', category: 'teacher', joinDate: '1995-07-01', gender: '男', birthDate: '1965-11-25', talent: null },
    ],
    // 近十年拟退休名单
    retirePersons: [
        { id: 14, name: '林峰', title: '教授', education: '博士', gender: '男', birthDate: '1960-03-10', retireDate: '2027-03-10', retireType: '正高' },
        { id: 12, name: '马骏', title: '教授', education: '博士', gender: '男', birthDate: '1968-05-15', retireDate: '2028-05-15', retireType: '正高' },
        { id: 15, name: '何华', title: '副教授', education: '硕士', gender: '男', birthDate: '1965-11-25', retireDate: '2027-11-25', retireType: '副高' },
        { id: 5, name: '陈静', title: '教授', education: '博士', gender: '女', birthDate: '1972-04-25', retireDate: '2027-04-25', retireType: '正高' },
        { id: 13, name: '高洁', title: '教授', education: '博士', gender: '女', birthDate: '1973-09-20', retireDate: '2028-09-20', retireType: '正高' },
        { id: 1, name: '张伟', title: '教授', education: '博士', gender: '男', birthDate: '1975-06-15', retireDate: '2035-06-15', retireType: '正高' },
    ],
};

// 在职人员分布分析数据（交叉表）
const staffDistributionData = {
    titleEdu: {
        labels: ['正高', '副高', '中级', '初级'],
        all: {
            teacher: { label: '专任教师', data: [38, 75, 50, 8], color: '#8C1515' },
            nonTeacher: { label: '非专任教师', data: [2, 8, 5, 0], color: '#1E3A5F' },
            edu: [
                { label: '博士', teacher: [35, 68, 42, 5], nonTeacher: [1, 5, 3, 0], color: '#8C1515' },
                { label: '硕士', teacher: [3, 6, 7, 3], nonTeacher: [1, 2, 2, 0], color: '#D97706' },
                { label: '本科', teacher: [0, 1, 1, 0], nonTeacher: [0, 1, 0, 0], color: '#9CA3AF' }
            ]
        }
    },
    titleAge: {
        labels: ['正高', '副高', '中级', '初级'],
        ageGroups: ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        data: {
            all: {
                teacher: [
                    [0, 0, 2, 5, 12, 10, 7, 2],
                    [0, 3, 12, 20, 22, 18, 12, 3],
                    [2, 8, 15, 12, 8, 3, 2, 0],
                    [5, 8, 6, 3, 2, 0, 0, 0]
                ],
                nonTeacher: [
                    [0, 0, 0, 1, 1, 1, 1, 0],
                    [0, 1, 2, 2, 2, 1, 0, 0],
                    [1, 3, 4, 3, 2, 1, 0, 0],
                    [2, 4, 3, 2, 1, 0, 0, 0]
                ]
            }
        }
    },
    titleTenure: {
        labels: ['正高', '副高', '中级', '初级'],
        tenureGroups: ['1-5年', '6-10年', '11-15年', '16-20年', '20年+'],
        data: {
            all: {
                teacher: [
                    [0, 2, 5, 10, 21],
                    [5, 15, 22, 18, 15],
                    [12, 18, 10, 6, 4],
                    [8, 10, 5, 4, 3]
                ],
                nonTeacher: [
                    [0, 1, 1, 1, 0],
                    [2, 3, 2, 1, 0],
                    [3, 4, 3, 2, 1],
                    [4, 3, 2, 1, 0]
                ]
            }
        }
    },
    eduAge: {
        labels: ['博士', '硕士', '本科'],
        ageGroups: ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        data: {
            all: {
                teacher: [
                    [2, 10, 16, 24, 30, 25, 18, 5],
                    [0, 1, 5, 6, 6, 4, 3, 0],
                    [0, 0, 1, 2, 3, 2, 2, 0]
                ],
                nonTeacher: [
                    [1, 4, 5, 4, 3, 2, 1, 0],
                    [2, 5, 6, 5, 4, 2, 1, 0],
                    [0, 3, 4, 3, 2, 1, 0, 0]
                ]
            }
        }
    },
    titleGender: {
        labels: ['正高', '副高', '中级', '初级'],
        data: {
            all: {
                teacher: { male: [28, 52, 35, 5], female: [10, 23, 15, 3] },
                nonTeacher: { male: [1, 5, 3, 0], female: [1, 3, 2, 0] }
            }
        }
    },
    titleOrigin: {
        labels: ['正高', '副高', '中级', '初级'],
        originGroups: ['本校学缘', '国内学缘', '海外学缘'],
        data: {
            all: {
                teacher: [
                    [8, 15, 15],
                    [18, 35, 22],
                    [10, 25, 15],
                    [3, 4, 1]
                ],
                nonTeacher: {
                    '本校学缘': [0, 3, 2, 0],
                    '国内学缘': [2, 5, 3, 0],
                    '海外学缘': [0, 0, 0, 0]
                }
            }
        }
    }
};

// 职能部门在职人员分布分析数据（交叉表，不区分专任/非专任）
const deptDistributionData = {
    titleEdu: {
        labels: ['正高', '副高', '中级', '初级'],
        edu: [
            { label: '博士', data: [1, 2, 1, 0], color: '#8C1515' },
            { label: '硕士', data: [0, 1, 2, 1], color: '#D97706' },
            { label: '本科', data: [0, 0, 1, 1], color: '#9CA3AF' }
        ]
    },
    titleAge: {
        labels: ['正高', '副高', '中级', '初级'],
        ageGroups: ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        data: [
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [1, 2, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0]
        ]
    },
    titleTenure: {
        labels: ['正高', '副高', '中级', '初级'],
        tenureGroups: ['1-5年', '6-10年', '11-15年', '16-20年', '20年+'],
        data: [
            [0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [2, 1, 1, 0, 0],
            [1, 1, 0, 0, 0]
        ]
    },
    eduAge: {
        labels: ['博士', '硕士', '本科'],
        ageGroups: ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
        data: [
            [0, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0]
        ]
    },
    titleGender: {
        labels: ['正高', '副高', '中级', '初级'],
        male: [1, 2, 2, 1],
        female: [0, 1, 2, 1]
    },
    titleOrigin: {
        labels: ['正高', '副高', '中级', '初级'],
        originGroups: ['本校学缘', '国内学缘', '海外学缘'],
        data: [
            [0, 1, 0],
            [1, 1, 1],
            [1, 2, 1],
            [1, 1, 0]
        ]
    }
};

// 在职人员趋势数据
const staffTrendData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    teacher: { label: '专任教师', data: [210, 215, 220, 228, 234] },
    nonTeacher: { label: '非专任教师', data: [210, 217, 225, 220, 222] }
};

// 合同制趋势数据
const contractTrendData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    join: { label: '入职', data: [5, 8, 6, 7, 9] },
    leave: { label: '减离', data: [3, 4, 5, 3, 4] }
};

// 博士后趋势数据
const postdocTrendData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    join: { label: '入职', data: [8, 10, 12, 11, 13] },
    leave: { label: '减离', data: [6, 7, 8, 9, 8] }
};

// 图表颜色配置
const chartColors = ['#8C1515', '#1E3A5F', '#D97706', '#16A34A', '#3B82F6', '#9CA3AF', '#6B7280', '#DC2626'];

// 模拟数据 - 职能部门（计算中心）
const departmentData = {
    persons: [
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', category: 'staff', joinDate: '2000-03-15', gender: '男', birthDate: '1968-05-20', talent: null },
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2005-07-01', gender: '女', birthDate: '1975-09-12', talent: null },
        { id: 3, name: '张明', title: '工程师', education: '硕士', category: 'staff', joinDate: '2012-08-15', gender: '男', birthDate: '1982-04-08', talent: null },
        { id: 4, name: '刘芳', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2018-09-01', gender: '女', birthDate: '1990-11-25', talent: null },
        { id: 5, name: '陈伟', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2008-04-10', gender: '男', birthDate: '1978-07-18', talent: null },
        { id: 6, name: '赵敏', title: '工程师', education: '本科', category: 'staff', joinDate: '2015-06-20', gender: '女', birthDate: '1985-02-14', talent: null },
        { id: 7, name: '周强', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2020-07-05', gender: '男', birthDate: '1992-08-30', talent: null },
        { id: 8, name: '吴丽', title: '合同制工程师', education: '硕士', category: 'contract', joinDate: '2021-08-10', gender: '女', birthDate: '1991-03-22', talent: null },
        { id: 9, name: '郑涛', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2022-09-01', gender: '男', birthDate: '1993-12-15', talent: null },
        { id: 10, name: '黄燕', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2023-07-15', gender: '女', birthDate: '1994-06-08', talent: null },
    ],
    // 近十年拟退休名单
    retirePersons: [
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', gender: '男', birthDate: '1968-05-20', retireDate: '2028-05-20', retireType: '正高' },
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', gender: '女', birthDate: '1975-09-12', retireDate: '2030-09-12', retireType: '副高' },
        { id: 5, name: '陈伟', title: '高级工程师', education: '硕士', gender: '男', birthDate: '1978-07-18', retireDate: '2038-07-18', retireType: '副高' },
    ],
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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化人员列表
    initPersonList();
    
    // 初始化事件监听
    initEventListeners();
    
    // 初始化当前单位类型的分析内容
    initAnalysisContent();
    
    // 延迟初始化图表，确保DOM已渲染
    setTimeout(() => {
        initCollegeCharts();
        initHomeCharts();
    }, 100);
});

// 初始化总览页图表（学历分布、职称分布）
function initHomeCharts() {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false
    };

    // 学院学历分布图表
    const collegeEduCtx = document.getElementById('college-edu-chart');
    if (collegeEduCtx) {
        new Chart(collegeEduCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{ data: [310, 98, 48], backgroundColor: ['#8C1515', '#1E3A5F', '#9CA3AF'], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }

    // 学院职称分布图表
    const collegeTitleCtx = document.getElementById('college-title-chart');
    if (collegeTitleCtx) {
        new Chart(collegeTitleCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['正高', '副高', '中级', '初级'],
                datasets: [{ data: [45, 160, 180, 71], backgroundColor: ['#8C1515', '#A52A2A', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }

    // 部门学历分布图表
    const deptEduCtx = document.getElementById('dept-edu-chart');
    if (deptEduCtx) {
        new Chart(deptEduCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{ data: [3, 4, 3], backgroundColor: ['#1E3A5F', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }

    // 部门职称分布图表
    const deptTitleCtx = document.getElementById('dept-title-chart');
    if (deptTitleCtx) {
        new Chart(deptTitleCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['正高', '副高', '中级', '初级'],
                datasets: [{ data: [1, 3, 4, 2], backgroundColor: ['#1E3A5F', '#A52A2A', '#D97706', '#9CA3AF'], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }
}

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
    const trendCtx1 = document.getElementById('college-staff-trend');
    if (trendCtx1) {
        try {
            collegeCharts.trend1 = new Chart(trendCtx1.getContext('2d'), {
                type: 'line',
                data: {
                    labels: staffTrendData.labels,
                    datasets: [
                        { label: staffTrendData.teacher.label, data: staffTrendData.teacher.data, borderColor: '#8C1515', backgroundColor: 'rgba(140, 21, 21, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#8C1515' },
                        { label: staffTrendData.nonTeacher.label, data: staffTrendData.nonTeacher.data, borderColor: '#1E3A5F', backgroundColor: 'rgba(30, 58, 95, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#1E3A5F' }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: false, min: 180, max: 260, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 合同制趋势（双折线：入职/减离）
    const trendCtx2 = document.getElementById('college-contract-trend');
    if (trendCtx2) {
        try {
            collegeCharts.trend2 = new Chart(trendCtx2.getContext('2d'), {
                type: 'line',
                data: {
                    labels: contractTrendData.labels,
                    datasets: [
                        { label: contractTrendData.join.label, data: contractTrendData.join.data, borderColor: '#16A34A', backgroundColor: 'rgba(22, 163, 74, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#16A34A' },
                        { label: contractTrendData.leave.label, data: contractTrendData.leave.data, borderColor: '#DC2626', backgroundColor: 'rgba(220, 38, 38, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#DC2626' }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: true, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }

    // 博士后趋势（双折线：入职/减离）
    const trendCtx3 = document.getElementById('college-postdoc-trend');
    if (trendCtx3) {
        try {
            collegeCharts.trend3 = new Chart(trendCtx3.getContext('2d'), {
                type: 'line',
                data: {
                    labels: postdocTrendData.labels,
                    datasets: [
                        { label: postdocTrendData.join.label, data: postdocTrendData.join.data, borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#3B82F6' },
                        { label: postdocTrendData.leave.label, data: postdocTrendData.leave.data, borderColor: '#D97706', backgroundColor: 'rgba(217, 119, 6, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#D97706' }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: true, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
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

    // 合同制入职/减离趋势
    const trendCtx3 = document.getElementById('dept-contract-trend');
    if (trendCtx3) {
        try {
            departmentCharts.trend3 = new Chart(trendCtx3.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '入职', data: [2, 3, 2, 3, 2], borderColor: '#16A34A', backgroundColor: 'rgba(22, 163, 74, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#16A34A' },
                        { label: '减离', data: [1, 1, 2, 1, 1], borderColor: '#DC2626', backgroundColor: 'rgba(220, 38, 38, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: '#DC2626' }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: true, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
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
    const distArea = document.getElementById('distribution-chart-area');
    if (distArea) distArea.innerHTML = '';
    
    // 重置分析页面Tab状态
    if (currentUnitType === 'college') {
        document.querySelectorAll('#page-analysis-college .tab-item').forEach(t => t.classList.remove('active'));
        const firstL3 = document.querySelector('#page-analysis-college .level-3 .tab-item');
        if (firstL3) firstL3.classList.add('active');
    }
}

// 初始化分析内容
function initAnalysisContent() {
    if (currentTab !== 'analysis') return;
    
    if (currentUnitType === 'college') {
        showStaffDistribution('title-edu', 'all');
    } else {
        showDeptDistribution('dept-title-edu');
    }
}

// 当前筛选的人员类型
let currentStaffFilter = 'all';

// 显示在职人员分布内容（图表或表格）
function showStaffDistribution(tab, filter) {
    currentAnalysisTab = tab;
    currentStaffFilter = filter || currentStaffFilter;
    
    const area = document.getElementById('distribution-chart-area');
    if (!area) return;
    
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    const chartTabs = ['title-edu'];
    const isChart = chartTabs.includes(tab);
    
    if (isChart) {
        area.innerHTML = '<div class="chart-card"><canvas id="college-dist-chart"></canvas></div>';
        const initChart = () => {
            const canvas = area.querySelector('canvas');
            if (!canvas) return;
            if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
                setTimeout(initChart, 50);
                return;
            }
            renderDistributionChart(canvas, tab, currentStaffFilter);
        };
        requestAnimationFrame(() => requestAnimationFrame(initChart));
    } else {
        area.innerHTML = renderDistributionTable(tab, currentStaffFilter);
    }
}

// 渲染分布图表（仅职称×学历）
function renderDistributionChart(canvas, tab, filter) {
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } }
        },
        scales: {
            y: { beginAtZero: true, stacked: true, grid: { color: '#F3F4F6' } },
            x: { stacked: true, grid: { display: false } }
        }
    };
    
    const d = staffDistributionData.titleEdu;
    const datasets = [];
    if (filter === 'all' || filter === 'teacher') {
        d.all.edu.forEach(e => {
            datasets.push({ label: e.label + '·专任', data: e.teacher, backgroundColor: e.color, borderRadius: 4 });
        });
    }
    if (filter === 'all' || filter === 'non-teacher') {
        d.all.edu.forEach(e => {
            datasets.push({ label: e.label + '·非专任', data: e.nonTeacher, backgroundColor: e.color + '88', borderRadius: 4 });
        });
    }
    
    try {
        currentAnalysisChart = new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: { labels: d.labels, datasets },
            options: chartOptions
        });
    } catch (e) {}
}

// 渲染分布表格（来校年限、学历×年龄、性别、学缘）
function renderDistributionTable(tab, filter) {
    if (tab === 'title-age') {
        const d = staffDistributionData.titleAge;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.ageGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.ageGroups.forEach((age, j) => {
                let val = 0;
                if (filter === 'all' || filter === 'teacher') val += d.data.all.teacher[i][j];
                if (filter === 'all' || filter === 'non-teacher') val += d.data.all.nonTeacher[i][j];
                html += `<td>${val}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'title-tenure') {
        const d = staffDistributionData.titleTenure;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.tenureGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.tenureGroups.forEach((g, j) => {
                let val = 0;
                if (filter === 'all' || filter === 'teacher') val += d.data.all.teacher[i][j];
                if (filter === 'all' || filter === 'non-teacher') val += d.data.all.nonTeacher[i][j];
                html += `<td>${val}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'edu-age') {
        const d = staffDistributionData.eduAge;
        let html = '<div class="data-table"><table><thead><tr><th>学历</th>';
        d.ageGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        
        d.labels.forEach((edu, i) => {
            html += `<tr><td>${edu}</td>`;
            d.ageGroups.forEach((age, j) => {
                let val = 0;
                if (filter === 'all' || filter === 'teacher') val += d.data.all.teacher[i][j];
                if (filter === 'all' || filter === 'non-teacher') val += d.data.all.nonTeacher[i][j];
                html += `<td>${val}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'title-gender') {
        const d = staffDistributionData.titleGender;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th><th>男性</th><th>女性</th><th>合计</th></tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            let male = 0, female = 0;
            if (filter === 'all' || filter === 'teacher') {
                male += d.data.all.teacher.male[i];
                female += d.data.all.teacher.female[i];
            }
            if (filter === 'all' || filter === 'non-teacher') {
                male += d.data.all.nonTeacher.male[i];
                female += d.data.all.nonTeacher.female[i];
            }
            html += `<tr><td>${title}</td><td>${male}</td><td>${female}</td><td>${male + female}</td></tr>`;
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'title-origin') {
        const d = staffDistributionData.titleOrigin;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.originGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.originGroups.forEach(origin => {
                let val = 0;
                if (filter === 'all' || filter === 'teacher') val += d.data.all.teacher[i][d.originGroups.indexOf(origin)];
                if (filter === 'all' || filter === 'non-teacher') val += d.data.all.nonTeacher[origin][i];
                html += `<td>${val}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
    }
    
    return '<div class="empty-state">暂无数据</div>';
}

// 显示分析Tab（部门）
// 显示职能部门分析内容（图表或表格）
function showDeptDistribution(tab) {
    currentAnalysisTab = tab;
    
    const tabContainer = document.querySelectorAll('#page-analysis-department .tab-item');
    tabContainer.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tab) {
            item.classList.add('active');
        }
    });
    
    const area = document.getElementById('dept-chart-area');
    if (!area) return;
    
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    const chartTabs = ['dept-title-edu'];
    const isChart = chartTabs.includes(tab);
    
    if (isChart) {
        area.innerHTML = '<div class="chart-card"><canvas id="dept-dist-chart"></canvas></div>';
        const initChart = () => {
            const canvas = area.querySelector('canvas');
            if (!canvas) return;
            if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
                setTimeout(initChart, 50);
                return;
            }
            renderDeptChart(canvas);
        };
        requestAnimationFrame(() => requestAnimationFrame(initChart));
    } else {
        area.innerHTML = renderDeptTable(tab);
    }
}

// 渲染职能部门图表（仅职称×学历）
function renderDeptChart(canvas) {
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    const d = deptDistributionData.titleEdu;
    const datasets = d.edu.map(e => ({
        label: e.label,
        data: e.data,
        backgroundColor: e.color,
        borderRadius: 4
    }));
    
    try {
        currentAnalysisChart = new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: { labels: d.labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } },
                scales: {
                    y: { beginAtZero: true, stacked: true, grid: { color: '#F3F4F6' } },
                    x: { stacked: true, grid: { display: false } }
                }
            }
        });
    } catch (e) {}
}

// 渲染职能部门表格
function renderDeptTable(tab) {
    if (tab === 'dept-title-age') {
        const d = deptDistributionData.titleAge;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.ageGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.ageGroups.forEach((age, j) => {
                html += `<td>${d.data[i][j]}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'dept-title-tenure') {
        const d = deptDistributionData.titleTenure;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.tenureGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.tenureGroups.forEach((g, j) => {
                html += `<td>${d.data[i][j]}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'dept-edu-age') {
        const d = deptDistributionData.eduAge;
        let html = '<div class="data-table"><table><thead><tr><th>学历</th>';
        d.ageGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        d.labels.forEach((edu, i) => {
            html += `<tr><td>${edu}</td>`;
            d.ageGroups.forEach((age, j) => {
                html += `<td>${d.data[i][j]}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'dept-title-gender') {
        const d = deptDistributionData.titleGender;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th><th>男性</th><th>女性</th><th>合计</th></tr></thead><tbody>';
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td><td>${d.male[i]}</td><td>${d.female[i]}</td><td>${d.male[i] + d.female[i]}</td></tr>`;
        });
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'dept-title-origin') {
        const d = deptDistributionData.titleOrigin;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.originGroups.forEach(g => { html += `<th>${g}</th>`; });
        html += '</tr></thead><tbody>';
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            d.originGroups.forEach((origin, j) => {
                html += `<td>${d.data[i][j]}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
        return html;
    }
    
    return '<div class="empty-state">暂无数据</div>';
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
                <div class="person-detail">${person.title} · ${person.education} · ${person.gender}</div>
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
                <div class="person-detail">${person.title} · ${person.education} · ${person.gender}</div>
            </div>
        </div>
    `).join('');
}

// 渲染拟退休名单 - 学院
function renderRetireList(persons) {
    const container = document.getElementById('retire-list');
    if (!container) return;
    
    const title = container.querySelector('.retire-list-title');
    container.innerHTML = '';
    if (title) container.appendChild(title);
    
    persons.forEach(person => {
        const item = document.createElement('div');
        item.className = 'person-item';
        item.onclick = () => showRetireDetail(person, 'college');
        item.innerHTML = `
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="person-tag">${person.retireType}</span>
                </div>
                <div class="person-detail">${person.title} · 拟退休：${person.retireDate}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// 渲染拟退休名单 - 部门
function renderDepartmentRetireList(persons) {
    const container = document.getElementById('retire-list-dept');
    if (!container) return;
    
    const title = container.querySelector('.retire-list-title');
    container.innerHTML = '';
    if (title) container.appendChild(title);
    
    persons.forEach(person => {
        const item = document.createElement('div');
        item.className = 'person-item';
        item.onclick = () => showRetireDetail(person, 'department');
        item.innerHTML = `
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="person-tag">${person.retireType}</span>
                </div>
                <div class="person-detail">${person.title} · 拟退休：${person.retireDate}</div>
            </div>
        `;
        container.appendChild(item);
    });
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
    
    // 分析Tab切换 - 学院（三级Tab：分布维度）
    document.querySelectorAll('#page-analysis-college .level-3 .tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('#page-analysis-college .level-3 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showStaffDistribution(this.dataset.tab, currentStaffFilter);
        });
    });
    
    // 专任教师/非专任教师筛选
    document.querySelectorAll('#analysis-distribution .type-chip[data-filter]').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('#analysis-distribution .type-chip[data-filter]').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const activeTab = document.querySelector('#page-analysis-college .level-3 .tab-item.active');
            const tabName = activeTab ? activeTab.dataset.tab : 'title-edu';
            showStaffDistribution(tabName, this.dataset.filter);
        });
    });
    
    // 分析Tab切换 - 部门
    document.querySelectorAll('#page-analysis-department .tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            showDeptDistribution(this.dataset.tab);
        });
    });
}

// 过滤人员列表 - 学院
function filterPersonList() {
    const keyword = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    const personList = document.getElementById('person-list');
    const retireList = document.getElementById('retire-list');
    
    if (currentType === 'retire') {
        personList.style.display = 'none';
        retireList.style.display = 'block';
        
        let filteredRetirePersons = collegeData.retirePersons;
        if (keyword) {
            filteredRetirePersons = filteredRetirePersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.title.toLowerCase().includes(keyword)
            );
        }
        renderRetireList(filteredRetirePersons);
        return;
    }
    
    personList.style.display = 'block';
    retireList.style.display = 'none';
    
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
    const retireList = document.getElementById('retire-list-dept');
    
    if (currentType === 'retire') {
        personList.style.display = 'none';
        retireList.style.display = 'block';
        
        let filteredRetirePersons = departmentData.retirePersons;
        if (keyword) {
            filteredRetirePersons = filteredRetirePersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.title.toLowerCase().includes(keyword)
            );
        }
        renderDepartmentRetireList(filteredRetirePersons);
        return;
    }
    
    personList.style.display = 'block';
    retireList.style.display = 'none';
    
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
    const tabOrder = ['home', 'analysis', 'list'];
    const tabIndex = tabOrder.indexOf(tab);
    if (tabIndex >= 0 && navItems[tabIndex]) {
        navItems[tabIndex].classList.add('active');
    }
    
    // 切换Tab后滚动到顶部
    window.scrollTo(0, 0);
    
    // 如果切换到分析Tab，确保分析内容和图表已初始化
    if (tab === 'analysis') {
        if (currentUnitType === 'college') {
            document.querySelectorAll('#page-analysis-college .tab-item').forEach(t => t.classList.remove('active'));
            const firstL3 = document.querySelector('#page-analysis-college .level-3 .tab-item');
            if (firstL3) firstL3.classList.add('active');
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    showStaffDistribution('title-edu', 'all');
                    initCollegeCharts();
                });
            });
        } else {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    showDeptDistribution('dept-title-edu');
                    initDepartmentCharts();
                });
            });
        }
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
                <span class="detail-label">性别</span>
                <span class="detail-value">${person.gender}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">出生日期</span>
                <span class="detail-value">${person.birthDate}</span>
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
                <span class="detail-label">来校时间</span>
                <span class="detail-value">${person.joinDate}</span>
            </div>
            ${person.talent ? `
            <div class="detail-row">
                <span class="detail-label">人才类别</span>
                <span class="detail-value">${person.talent}</span>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

// 显示拟退休人员详情
function showRetireDetail(personData, unitType) {
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = personData.name + ' - 详情';
    body.innerHTML = `
        <div class="detail-card">
            <div class="detail-row">
                <span class="detail-label">姓名</span>
                <span class="detail-value">${personData.name}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">性别</span>
                <span class="detail-value">${personData.gender}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">出生日期</span>
                <span class="detail-value">${personData.birthDate}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">职称/职位</span>
                <span class="detail-value">${personData.title}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">最高学历</span>
                <span class="detail-value">${personData.education}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">职称类别</span>
                <span class="detail-value">${personData.retireType}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">拟退休日期</span>
                <span class="detail-value" style="color: #DC2626; font-weight: 600;">${personData.retireDate}</span>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// 切换学院下拉菜单
function toggleCollegeDropdown() {
    const dropdown = document.getElementById('collegeDropdown');
    dropdown.classList.toggle('active');
}

// 选择学院/部门
function selectCollege(name, type) {
    currentCollege = name;
    currentUnitType = type;
    
    // 更新UI
    document.getElementById('unit-name').textContent = name;
    document.getElementById('unit-type-badge').textContent = type === 'college' ? '二级学院' : '职能部门';
    
    // 更新下拉菜单选中状态
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('active');
        if (item.textContent === name) {
            item.classList.add('active');
        }
    });
    
    // 关闭下拉菜单
    document.getElementById('collegeDropdown').classList.remove('active');
    
    // 检查是否有数据
    const hasData = unitsWithData[type].includes(name);
    
    if (hasData) {
        // 显示对应页面
        resetAllCharts();
        
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // 显示当前Tab对应的页面
        const pageId = `page-${currentTab}-${currentUnitType}`;
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }
        
        // 重新初始化图表
        setTimeout(() => {
            if (currentTab === 'analysis') {
                initAnalysisContent();
                if (currentUnitType === 'college') {
                    initCollegeCharts();
                } else {
                    initDepartmentCharts();
                }
            }
        }, 100);
    } else {
        // 显示暂无数据页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('page-no-data').classList.add('active');
    }
}

// 关闭弹窗
function closeModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

// 点击弹窗外部关闭
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// 点击外部关闭下拉菜单
document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-right')) {
        document.getElementById('collegeDropdown').classList.remove('active');
    }
});
