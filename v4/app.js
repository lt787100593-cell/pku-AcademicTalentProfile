// 模拟数据 - 学院（100名在职人员，20名高层次人才，30名拟退休）
const collegeData = {
    persons: [
        // 专任教师 - 正高（15人）
        { id: 1, name: '张伟', title: '教授', education: '博士', category: 'teacher', joinDate: '2005-09-01', gender: '男', birthDate: '1975-06-15', talent: null },
        { id: 2, name: '李强', title: '教授', education: '博士', category: 'teacher', joinDate: '2003-07-01', gender: '男', birthDate: '1972-08-20', talent: '长江学者' },
        { id: 3, name: '王芳', title: '教授', education: '博士', category: 'teacher', joinDate: '2001-09-01', gender: '女', birthDate: '1970-03-15', talent: '杰青' },
        { id: 4, name: '刘洋', title: '教授', education: '博士', category: 'teacher', joinDate: '1998-09-01', gender: '男', birthDate: '1968-11-25', talent: '院士' },
        { id: 5, name: '陈静', title: '教授', education: '博士', category: 'teacher', joinDate: '2002-03-15', gender: '女', birthDate: '1972-04-25', talent: '杰青' },
        { id: 6, name: '赵磊', title: '教授', education: '博士', category: 'teacher', joinDate: '2000-09-01', gender: '男', birthDate: '1970-09-12', talent: '长江学者' },
        { id: 7, name: '孙丽', title: '教授', education: '博士', category: 'teacher', joinDate: '2004-07-01', gender: '女', birthDate: '1973-02-18', talent: null },
        { id: 8, name: '周明', title: '教授', education: '博士', category: 'teacher', joinDate: '1999-09-01', gender: '男', birthDate: '1969-07-08', talent: '长江学者' },
        { id: 9, name: '吴华', title: '教授', education: '博士', category: 'teacher', joinDate: '2001-03-15', gender: '女', birthDate: '1971-11-20', talent: null },
        { id: 10, name: '郑强', title: '教授', education: '博士', category: 'teacher', joinDate: '1996-09-01', gender: '男', birthDate: '1966-05-08', talent: '杰青' },
        { id: 11, name: '黄磊', title: '教授', education: '博士', category: 'teacher', joinDate: '2003-09-01', gender: '男', birthDate: '1973-06-20', talent: '青年人才' },
        { id: 12, name: '马骏', title: '教授', education: '博士', category: 'teacher', joinDate: '2000-03-01', gender: '男', birthDate: '1968-05-15', talent: '长江学者' },
        { id: 13, name: '高洁', title: '教授', education: '博士', category: 'teacher', joinDate: '2003-07-01', gender: '女', birthDate: '1973-09-20', talent: '杰青' },
        { id: 14, name: '林峰', title: '教授', education: '博士', category: 'teacher', joinDate: '1990-09-01', gender: '男', birthDate: '1960-03-10', talent: '院士' },
        { id: 15, name: '何华', title: '教授', education: '硕士', category: 'teacher', joinDate: '1995-07-01', gender: '男', birthDate: '1965-11-25', talent: null },
        // 专任教师 - 副高（18人）
        { id: 16, name: '李明', title: '副教授', education: '博士', category: 'teacher', joinDate: '2010-07-20', gender: '男', birthDate: '1980-03-22', talent: null },
        { id: 17, name: '王丽', title: '副教授', education: '博士', category: 'teacher', joinDate: '2012-09-01', gender: '女', birthDate: '1982-04-18', talent: null },
        { id: 18, name: '赵刚', title: '副教授', education: '博士', category: 'teacher', joinDate: '2011-07-15', gender: '男', birthDate: '1981-09-30', talent: '青年人才' },
        { id: 19, name: '孙芳', title: '副教授', education: '博士', category: 'teacher', joinDate: '2013-09-01', gender: '女', birthDate: '1983-07-12', talent: null },
        { id: 20, name: '刘涛', title: '副教授', education: '博士', category: 'teacher', joinDate: '2014-03-15', gender: '男', birthDate: '1984-12-05', talent: null },
        { id: 21, name: '杨静', title: '副教授', education: '博士', category: 'teacher', joinDate: '2015-09-01', gender: '女', birthDate: '1985-10-15', talent: null },
        { id: 22, name: '朱军', title: '副教授', education: '博士', category: 'teacher', joinDate: '2010-03-01', gender: '男', birthDate: '1980-08-22', talent: null },
        { id: 23, name: '胡敏', title: '副教授', education: '博士', category: 'teacher', joinDate: '2016-09-01', gender: '女', birthDate: '1986-03-25', talent: '青年人才' },
        { id: 24, name: '林涛', title: '副教授', education: '博士', category: 'teacher', joinDate: '2017-09-01', gender: '男', birthDate: '1987-05-18', talent: null },
        { id: 25, name: '郭华', title: '副教授', education: '博士', category: 'teacher', joinDate: '2014-09-01', gender: '女', birthDate: '1984-09-10', talent: null },
        { id: 26, name: '何明', title: '副教授', education: '博士', category: 'teacher', joinDate: '2015-09-01', gender: '男', birthDate: '1985-01-20', talent: '青年人才' },
        { id: 27, name: '罗芳', title: '副教授', education: '博士', category: 'teacher', joinDate: '2018-09-01', gender: '女', birthDate: '1988-06-15', talent: null },
        { id: 28, name: '谢伟', title: '副教授', education: '博士', category: 'teacher', joinDate: '2012-09-01', gender: '男', birthDate: '1982-08-12', talent: null },
        { id: 29, name: '韩梅', title: '副教授', education: '硕士', category: 'teacher', joinDate: '2011-09-01', gender: '女', birthDate: '1981-11-25', talent: null },
        { id: 30, name: '曹强', title: '副教授', education: '博士', category: 'teacher', joinDate: '2013-09-01', gender: '男', birthDate: '1983-02-18', talent: null },
        { id: 31, name: '彭芳', title: '副教授', education: '博士', category: 'teacher', joinDate: '2014-07-01', gender: '女', birthDate: '1984-05-30', talent: null },
        { id: 32, name: '蒋华', title: '副教授', education: '博士', category: 'teacher', joinDate: '2015-09-01', gender: '男', birthDate: '1985-10-08', talent: null },
        { id: 33, name: '沈丽', title: '副教授', education: '博士', category: 'teacher', joinDate: '2016-09-01', gender: '女', birthDate: '1986-04-20', talent: '青年人才' },
        // 专任教师 - 中级（12人）
        { id: 34, name: '吕超', title: '讲师', education: '博士', category: 'teacher', joinDate: '2019-09-01', gender: '男', birthDate: '1989-07-12', talent: null },
        { id: 35, name: '苏芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2020-09-01', gender: '女', birthDate: '1990-09-25', talent: null },
        { id: 36, name: '卢涛', title: '讲师', education: '博士', category: 'teacher', joinDate: '2018-09-01', gender: '男', birthDate: '1988-12-08', talent: null },
        { id: 37, name: '任丽', title: '讲师', education: '博士', category: 'teacher', joinDate: '2019-09-01', gender: '女', birthDate: '1989-06-18', talent: null },
        { id: 38, name: '丁磊', title: '讲师', education: '博士', category: 'teacher', joinDate: '2020-09-01', gender: '男', birthDate: '1990-11-15', talent: null },
        { id: 39, name: '贺芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2021-09-01', gender: '女', birthDate: '1991-03-20', talent: null },
        { id: 40, name: '龙涛', title: '讲师', education: '博士', category: 'teacher', joinDate: '2022-09-01', gender: '男', birthDate: '1992-07-08', talent: null },
        { id: 41, name: '段芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '女', birthDate: '1993-09-12', talent: null },
        { id: 42, name: '侯明', title: '讲师', education: '博士', category: 'teacher', joinDate: '2019-09-01', gender: '男', birthDate: '1989-04-25', talent: null },
        { id: 43, name: '邵丽', title: '讲师', education: '博士', category: 'teacher', joinDate: '2020-09-01', gender: '女', birthDate: '1990-08-15', talent: null },
        { id: 44, name: '孟强', title: '讲师', education: '博士', category: 'teacher', joinDate: '2021-09-01', gender: '男', birthDate: '1991-12-20', talent: null },
        { id: 45, name: '龚芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2022-09-01', gender: '女', birthDate: '1992-06-08', talent: null },
        // 专任教师 - 初级（7人）
        { id: 46, name: '武伟', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '男', birthDate: '1993-08-12', talent: null },
        { id: 47, name: '钱芳', title: '助教', education: '硕士', category: 'teacher', joinDate: '2024-09-01', gender: '女', birthDate: '1994-11-25', talent: null },
        { id: 48, name: '汤明', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '男', birthDate: '1993-05-18', talent: null },
        { id: 49, name: '尹丽', title: '助教', education: '硕士', category: 'teacher', joinDate: '2024-09-01', gender: '女', birthDate: '1994-09-30', talent: null },
        { id: 50, name: '黎强', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '男', birthDate: '1993-02-22', talent: null },
        { id: 51, name: '施芳', title: '助教', education: '硕士', category: 'teacher', joinDate: '2024-09-01', gender: '女', birthDate: '1994-07-15', talent: null },
        { id: 52, name: '尤明', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '男', birthDate: '1993-10-05', talent: null },
        // 非专任教师（行政等，15人）
        { id: 53, name: '张磊', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2008-06-01', gender: '男', birthDate: '1978-09-12', talent: null },
        { id: 54, name: '李丽', title: '会计师', education: '本科', category: 'staff', joinDate: '2012-04-10', gender: '女', birthDate: '1982-12-05', talent: null },
        { id: 55, name: '王强', title: '副研究员', education: '博士', category: 'staff', joinDate: '2010-09-01', gender: '男', birthDate: '1980-02-18', talent: null },
        { id: 56, name: '刘芳', title: '助理研究员', education: '硕士', category: 'staff', joinDate: '2015-07-01', gender: '女', birthDate: '1985-05-30', talent: null },
        { id: 57, name: '陈华', title: '工程师', education: '硕士', category: 'staff', joinDate: '2013-09-01', gender: '男', birthDate: '1983-10-08', talent: null },
        { id: 58, name: '赵敏', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2019-09-01', gender: '女', birthDate: '1990-04-20', talent: null },
        { id: 59, name: '孙强', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2009-03-15', gender: '男', birthDate: '1979-04-08', talent: null },
        { id: 60, name: '周芳', title: '工程师', education: '本科', category: 'staff', joinDate: '2016-07-01', gender: '女', birthDate: '1986-12-18', talent: null },
        { id: 61, name: '吴明', title: '工程师', education: '硕士', category: 'staff', joinDate: '2014-09-01', gender: '男', birthDate: '1984-09-30', talent: null },
        { id: 62, name: '郑丽', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2020-09-01', gender: '女', birthDate: '1991-11-25', talent: null },
        { id: 63, name: '冯强', title: '高级工程师', education: '博士', category: 'staff', joinDate: '2007-09-01', gender: '男', birthDate: '1977-06-15', talent: null },
        { id: 64, name: '陈芳', title: '工程师', education: '硕士', category: 'staff', joinDate: '2017-09-01', gender: '女', birthDate: '1987-08-22', talent: null },
        { id: 65, name: '蒋明', title: '工程师', education: '本科', category: 'staff', joinDate: '2018-09-01', gender: '男', birthDate: '1988-03-12', talent: null },
        { id: 66, name: '沈丽', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2021-09-01', gender: '女', birthDate: '1992-07-20', talent: null },
        { id: 67, name: '韩强', title: '工程师', education: '硕士', category: 'staff', joinDate: '2015-09-01', gender: '男', birthDate: '1985-05-08', talent: null },
        // 合同制（8人）
        { id: 68, name: '杨涛', title: '合同制研究员', education: '博士', category: 'contract', joinDate: '2020-07-15', gender: '男', birthDate: '1990-02-28', talent: null },
        { id: 69, name: '朱敏', title: '合同制助理', education: '硕士', category: 'contract', joinDate: '2021-08-20', gender: '女', birthDate: '1992-05-16', talent: null },
        { id: 70, name: '秦超', title: '合同制研究员', education: '博士', category: 'contract', joinDate: '2022-07-01', gender: '男', birthDate: '1991-07-12', talent: null },
        { id: 71, name: '尤芳', title: '合同制助理', education: '硕士', category: 'contract', joinDate: '2023-09-01', gender: '女', birthDate: '1993-09-25', talent: null },
        { id: 72, name: '许涛', title: '合同制工程师', education: '硕士', category: 'contract', joinDate: '2021-03-15', gender: '男', birthDate: '1991-12-08', talent: null },
        { id: 73, name: '何丽', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2024-01-10', gender: '女', birthDate: '1994-06-18', talent: null },
        { id: 74, name: '吕明', title: '合同制研究员', education: '博士', category: 'contract', joinDate: '2022-09-01', gender: '男', birthDate: '1992-10-12', talent: null },
        { id: 75, name: '施芳', title: '合同制助理', education: '硕士', category: 'contract', joinDate: '2023-09-01', gender: '女', birthDate: '1993-02-28', talent: null },
        // 博士后（5人）
        { id: 76, name: '郑涛', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2023-09-01', gender: '男', birthDate: '1993-10-08', talent: null },
        { id: 77, name: '黄燕', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-01-10', gender: '女', birthDate: '1994-08-22', talent: null },
        { id: 78, name: '丁磊', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2023-03-01', gender: '男', birthDate: '1992-11-15', talent: null },
        { id: 79, name: '贺芳', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-09-01', gender: '女', birthDate: '1995-03-20', talent: null },
        { id: 80, name: '龙涛', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2023-09-01', gender: '男', birthDate: '1993-07-08', talent: null },
        // 补充到100人（20人）
        { id: 81, name: '贾伟', title: '副教授', education: '博士', category: 'teacher', joinDate: '2016-09-01', gender: '男', birthDate: '1986-04-15', talent: null },
        { id: 82, name: '夏芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2021-09-01', gender: '女', birthDate: '1991-08-25', talent: null },
        { id: 83, name: '田明', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '男', birthDate: '1993-12-10', talent: null },
        { id: 84, name: '范丽', title: '工程师', education: '硕士', category: 'staff', joinDate: '2019-09-01', gender: '女', birthDate: '1989-06-22', talent: null },
        { id: 85, name: '彭强', title: '高级工程师', education: '博士', category: 'staff', joinDate: '2008-09-01', gender: '男', birthDate: '1978-10-18', talent: null },
        { id: 86, name: '董芳', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2024-03-01', gender: '女', birthDate: '1995-01-15', talent: null },
        { id: 87, name: '袁明', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-09-01', gender: '男', birthDate: '1994-05-20', talent: null },
        { id: 88, name: '邓芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2022-09-01', gender: '女', birthDate: '1992-03-08', talent: null },
        { id: 89, name: '许强', title: '副教授', education: '博士', category: 'teacher', joinDate: '2014-09-01', gender: '男', birthDate: '1984-07-30', talent: '青年人才' },
        { id: 90, name: '傅丽', title: '助教', education: '硕士', category: 'teacher', joinDate: '2024-09-01', gender: '女', birthDate: '1994-11-12', talent: null },
        { id: 91, name: '沈涛', title: '工程师', education: '本科', category: 'staff', joinDate: '2020-09-01', gender: '男', birthDate: '1990-09-25', talent: null },
        { id: 92, name: '曾芳', title: '合同制研究员', education: '博士', category: 'contract', joinDate: '2023-09-01', gender: '女', birthDate: '1993-04-18', talent: null },
        { id: 93, name: '彭明', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-01-10', gender: '男', birthDate: '1994-02-08', talent: null },
        { id: 94, name: '吕芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '女', birthDate: '1993-06-15', talent: null },
        { id: 95, name: '苏强', title: '副教授', education: '博士', category: 'teacher', joinDate: '2017-09-01', gender: '男', birthDate: '1987-09-22', talent: null },
        { id: 96, name: '卢丽', title: '助教', education: '博士', category: 'teacher', joinDate: '2023-09-01', gender: '女', birthDate: '1993-10-05', talent: null },
        { id: 97, name: '蒋涛', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2010-09-01', gender: '男', birthDate: '1980-12-20', talent: null },
        { id: 98, name: '唐芳', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2024-09-01', gender: '女', birthDate: '1995-08-12', talent: null },
        { id: 99, name: '韩明', title: '博士后', education: '博士', category: 'postdoc', joinDate: '2024-09-01', gender: '男', birthDate: '1994-11-28', talent: null },
        { id: 100, name: '冯芳', title: '讲师', education: '博士', category: 'teacher', joinDate: '2022-09-01', gender: '女', birthDate: '1992-08-30', talent: null },
    ],
    // 近十年拟退休名单（30人）
    retirePersons: [
        { id: 14, name: '林峰', title: '教授', education: '博士', gender: '男', birthDate: '1960-03-10', retireDate: '2027-03-10', retireType: '正高' },
        { id: 12, name: '马骏', title: '教授', education: '博士', gender: '男', birthDate: '1968-05-15', retireDate: '2028-05-15', retireType: '正高' },
        { id: 15, name: '何华', title: '教授', education: '硕士', gender: '男', birthDate: '1965-11-25', retireDate: '2027-11-25', retireType: '正高' },
        { id: 5, name: '陈静', title: '教授', education: '博士', gender: '女', birthDate: '1972-04-25', retireDate: '2027-04-25', retireType: '正高' },
        { id: 13, name: '高洁', title: '教授', education: '博士', gender: '女', birthDate: '1973-09-20', retireDate: '2028-09-20', retireType: '正高' },
        { id: 1, name: '张伟', title: '教授', education: '博士', gender: '男', birthDate: '1975-06-15', retireDate: '2035-06-15', retireType: '正高' },
        { id: 8, name: '周明', title: '教授', education: '博士', gender: '男', birthDate: '1969-07-08', retireDate: '2029-07-08', retireType: '正高' },
        { id: 10, name: '郑强', title: '教授', education: '博士', gender: '男', birthDate: '1966-05-08', retireDate: '2026-05-08', retireType: '正高' },
        { id: 6, name: '赵磊', title: '教授', education: '博士', gender: '男', birthDate: '1970-09-12', retireDate: '2030-09-12', retireType: '正高' },
        { id: 4, name: '刘洋', title: '教授', education: '博士', gender: '男', birthDate: '1968-11-25', retireDate: '2028-11-25', retireType: '正高' },
        { id: 2, name: '李强', title: '教授', education: '博士', gender: '男', birthDate: '1972-08-20', retireDate: '2032-08-20', retireType: '正高' },
        { id: 3, name: '王芳', title: '教授', education: '博士', gender: '女', birthDate: '1970-03-15', retireDate: '2030-03-15', retireType: '正高' },
        { id: 9, name: '吴华', title: '教授', education: '博士', gender: '女', birthDate: '1971-11-20', retireDate: '2031-11-20', retireType: '正高' },
        { id: 53, name: '张磊', title: '高级工程师', education: '硕士', gender: '男', birthDate: '1978-09-12', retireDate: '2038-09-12', retireType: '副高' },
        { id: 59, name: '孙强', title: '高级工程师', education: '硕士', gender: '男', birthDate: '1979-04-08', retireDate: '2039-04-08', retireType: '副高' },
        { id: 63, name: '冯强', title: '高级工程师', education: '博士', gender: '男', birthDate: '1977-06-15', retireDate: '2037-06-15', retireType: '副高' },
        { id: 97, name: '蒋涛', title: '高级工程师', education: '硕士', gender: '男', birthDate: '1980-12-20', retireDate: '2040-12-20', retireType: '副高' },
        { id: 85, name: '彭强', title: '高级工程师', education: '博士', gender: '男', birthDate: '1978-10-18', retireDate: '2038-10-18', retireType: '副高' },
        { id: 55, name: '王强', title: '副研究员', education: '博士', gender: '男', birthDate: '1980-02-18', retireDate: '2040-02-18', retireType: '副高' },
        { id: 54, name: '李丽', title: '会计师', education: '本科', gender: '女', birthDate: '1982-12-05', retireDate: '2042-12-05', retireType: '副高' },
        { id: 57, name: '陈华', title: '工程师', education: '硕士', gender: '男', birthDate: '1983-10-08', retireDate: '2043-10-08', retireType: '中级' },
        { id: 56, name: '刘芳', title: '助理研究员', education: '硕士', gender: '女', birthDate: '1985-05-30', retireDate: '2045-05-30', retireType: '中级' },
        { id: 61, name: '吴明', title: '工程师', education: '硕士', gender: '男', birthDate: '1984-09-30', retireDate: '2044-09-30', retireType: '中级' },
        { id: 60, name: '周芳', title: '工程师', education: '本科', gender: '女', birthDate: '1986-12-18', retireDate: '2046-12-18', retireType: '中级' },
        { id: 65, name: '蒋明', title: '工程师', education: '本科', gender: '男', birthDate: '1988-03-12', retireDate: '2048-03-12', retireType: '中级' },
        { id: 64, name: '陈芳', title: '工程师', education: '硕士', gender: '女', birthDate: '1987-08-22', retireDate: '2047-08-22', retireType: '中级' },
        { id: 58, name: '赵敏', title: '助理工程师', education: '本科', gender: '女', birthDate: '1990-04-20', retireDate: '2050-04-20', retireType: '初级' },
        { id: 62, name: '郑丽', title: '助理工程师', education: '本科', gender: '女', birthDate: '1991-11-25', retireDate: '2051-11-25', retireType: '初级' },
        { id: 66, name: '沈丽', title: '助理工程师', education: '本科', gender: '女', birthDate: '1992-07-20', retireDate: '2052-07-20', retireType: '初级' },
        { id: 67, name: '韩强', title: '工程师', education: '硕士', gender: '男', birthDate: '1985-05-08', retireDate: '2045-05-08', retireType: '中级' },
    ],
    // 离退休人员名单（200人）
    retiredPersons: generateRetiredPersons(),
};

// 生成离退休人员数据
function generateRetiredPersons() {
    const lastNames = ['张', '李', '王', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗', '梁', '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏', '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎'];
    const maleFirstNames = ['伟', '强', '磊', '军', '勇', '杰', '涛', '明', '超', '华', '飞', '刚', '辉', '建国', '志强', '文博', '天翔', '浩然', '子轩', '宇航'];
    const femaleFirstNames = ['芳', '娜', '敏', '静', '丽', '强', '磊', '军', '勇', '杰', '涛', '明', '超', '华', '飞', '刚', '辉', '建国', '志强', '文博'];
    const titles = ['教授', '副教授', '讲师', '助教', '高级工程师', '工程师', '助理工程师', '研究员', '副研究员', '助理研究员'];
    const educations = ['博士', '硕士', '本科'];
    const genders = ['男', '女'];
    const retireTypes = ['正高', '副高', '中级', '初级'];
    
    const persons = [];
    
    for (let i = 1; i <= 200; i++) {
        const gender = genders[Math.floor(Math.random() * 2)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const firstName = gender === '男' 
            ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
            : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
        const name = lastName + firstName;
        
        const title = titles[Math.floor(Math.random() * titles.length)];
        const education = educations[Math.floor(Math.random() * educations.length)];
        
        // 生成出生日期（55-75岁）
        const birthYear = 1950 + Math.floor(Math.random() * 25);
        const birthMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const birthDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        const birthDate = `${birthYear}-${birthMonth}-${birthDay}`;
        
        // 生成离退休日期（2015-2025年）
        const retireYear = 2015 + Math.floor(Math.random() * 11);
        const retireMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const retireDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        const retiredDate = `${retireYear}-${retireMonth}-${retireDay}`;
        
        // 根据职称确定离退休类型
        let retireType;
        if (title.includes('教授') || title.includes('研究员')) {
            retireType = Math.random() > 0.3 ? '正高' : '副高';
        } else if (title.includes('高级') || title.includes('副')) {
            retireType = '副高';
        } else if (title.includes('讲师') || title.includes('工程师') || title.includes('助理研究员')) {
            retireType = '中级';
        } else {
            retireType = '初级';
        }
        
        persons.push({
            id: 1000 + i,
            name: name,
            title: title,
            education: education,
            gender: gender,
            birthDate: birthDate,
            retiredDate: retiredDate,
            retireType: retireType
        });
    }
    
    return persons;
}

// 在职人员分布分析数据（交叉表）
const staffDistributionData = {
    titleEdu: {
        labels: ['正高', '副高', '中级', '初级'],
        all: {
            teacher: { label: '专任教师', data: [8, 8, 8, 2], color: '#8C1515' },
            nonTeacher: { label: '非专任教师', data: [0, 2, 3, 1], color: '#1E3A5F' },
            edu: [
                { label: '博士', teacher: [8, 7, 7, 1], nonTeacher: [0, 1, 1, 0], color: '#8C1515' },
                { label: '硕士', teacher: [0, 1, 1, 1], nonTeacher: [0, 1, 1, 0], color: '#D97706' },
                { label: '本科', teacher: [0, 0, 0, 0], nonTeacher: [0, 0, 1, 1], color: '#9CA3AF' }
            ]
        }
    },
    titleAge: {
        labels: ['正高', '副高', '中级', '初级'],
        ageGroups: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
        data: {
            all: {
                teacher: [
                    [0, 1, 3, 8, 3],
                    [0, 4, 8, 5, 1],
                    [0, 5, 5, 2, 0],
                    [3, 3, 1, 0, 0]
                ],
                nonTeacher: [
                    [0, 1, 2, 2, 0],
                    [0, 2, 3, 1, 0],
                    [1, 3, 2, 1, 0],
                    [1, 2, 1, 0, 0]
                ]
            }
        }
    },
    eduAge: {
        labels: ['博士', '硕士', '本科'],
        ageGroups: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
        data: {
            all: {
                teacher: [
                    [3, 10, 15, 12, 3],
                    [0, 2, 2, 1, 0],
                    [0, 1, 0, 0, 0]
                ],
                nonTeacher: [
                    [1, 3, 4, 2, 0],
                    [1, 2, 2, 1, 0],
                    [1, 1, 0, 0, 0]
                ]
            }
        }
    },
    titleGender: {
        labels: ['正高', '副高', '中级', '初级'],
        data: {
            all: {
                teacher: { male: [6, 5, 5, 1], female: [2, 3, 3, 1] },
                nonTeacher: { male: [0, 1, 2, 0], female: [0, 1, 1, 1] }
            }
        }
    },
    titleOrigin: {
        labels: ['正高', '副高', '中级', '初级'],
        originGroups: ['本校学缘', '国内学缘', '海外学缘'],
        data: {
            all: {
                teacher: [
                    [2, 3, 3],
                    [2, 4, 2],
                    [2, 4, 2],
                    [1, 1, 0]
                ],
                nonTeacher: {
                    '本校学缘': [0, 1, 1, 0],
                    '国内学缘': [0, 1, 2, 1],
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
            { label: '博士', data: [2, 1, 0, 0], color: '#8C1515' },
            { label: '硕士', data: [0, 2, 3, 1], color: '#D97706' },
            { label: '本科', data: [0, 0, 2, 2], color: '#9CA3AF' }
        ]
    },
    titleAge: {
        labels: ['正高', '副高', '中级', '初级'],
        ageGroups: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
        data: [
            [0, 0, 0, 1, 1],
            [0, 2, 3, 1, 0],
            [1, 4, 3, 0, 0],
            [2, 2, 1, 0, 0]
        ]
    },
    titleTenure: {
        labels: ['正高', '副高', '中级', '初级'],
        tenureGroups: ['1-5年', '6-10年', '11-15年', '16-20年', '20年+'],
        data: [
            [0, 0, 1, 0, 1],
            [1, 1, 1, 1, 0],
            [2, 2, 1, 0, 0],
            [2, 1, 0, 0, 0]
        ]
    },
    eduAge: {
        labels: ['博士', '硕士', '本科'],
        ageGroups: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
        data: [
            [0, 1, 1, 1, 0],
            [1, 3, 3, 2, 1],
            [1, 2, 1, 0, 0]
        ]
    },
    titleGender: {
        labels: ['正高', '副高', '中级', '初级'],
        male: [2, 3, 4, 2],
        female: [0, 1, 2, 2]
    },
    titleOrigin: {
        labels: ['正高', '副高', '中级', '初级'],
        originGroups: ['本校学缘', '国内学缘', '海外学缘'],
        data: [
            [1, 1, 0],
            [1, 2, 1],
            [2, 3, 1],
            [2, 1, 1]
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

// 年龄构成数据（区分专任/非专任）
const ageCompositionData = {
    all: { data: [15, 35, 28, 18, 4], label: '全部', percent35: 42, avgAge: 38.5, rank: '第8/28位', rankLevel: '上游' },
    teacher: { data: [12, 28, 22, 14, 3], label: '专任教师', percent35: 45, avgAge: 37.2, rank: '第6/28位', rankLevel: '上游' },
    'non-teacher': { data: [3, 7, 6, 4, 1], label: '非专任教师', percent35: 35, avgAge: 41.5, rank: '第15/28位', rankLevel: '中下游' }
};

// 职称构成数据（区分专任/非专任）
const titleCompositionData = {
    all: { data: [15, 18, 12, 7], label: '全部', percentSenior: 62,正高Count: 15, rank: '第5/28位', rankLevel: '上游' },
    teacher: { data: [15, 12, 8, 2], label: '专任教师', percentSenior: 69,正高Count: 15, rank: '第3/28位', rankLevel: '上游' },
    'non-teacher': { data: [0, 6, 4, 5], label: '非专任教师', percentSenior: 40,正高Count: 0, rank: '第18/28位', rankLevel: '下游' }
};

// 学历构成数据（区分专任/非专任）
const eduCompositionData = {
    all: { data: [68, 22, 10], label: '全部', percentPhd: 68, percentMaster: 22, rank: '第3/28位', rankLevel: '上游' },
    teacher: { data: [85, 12, 3], label: '专任教师', percentPhd: 85, percentMaster: 12, rank: '第2/28位', rankLevel: '上游' },
    'non-teacher': { data: [25, 45, 30], label: '非专任教师', percentPhd: 25, percentMaster: 45, rank: '第20/28位', rankLevel: '下游' }
};

// 图表颜色配置（北大红主题色板）
const chartColors = {
    primary: '#8C1515',    // 北大红 - 主数据
    secondary: '#B8860B',  // 暗金色 - 辅数据
    tertiary: '#2C3E50',   // 深青灰 - 第三组
    quaternary: '#708090', // 石板灰 - 第四组
    quinary: '#A0522D',    // 赭石色 - 第五组
};
const chartColorsArray = ['#8C1515', '#B8860B', '#2C3E50', '#708090', '#A0522D'];

// 模拟数据 - 职能部门（计算中心）
const departmentData = {
    persons: [
        // 在职人员 - 正高
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', category: 'staff', joinDate: '2000-03-15', gender: '男', birthDate: '1968-05-20', talent: '学科带头人' },
        { id: 11, name: '陈志远', title: '正高级工程师', education: '博士', category: 'staff', joinDate: '1998-09-01', gender: '男', birthDate: '1966-08-12', talent: null },
        // 在职人员 - 副高
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2005-07-01', gender: '女', birthDate: '1975-09-12', talent: null },
        { id: 5, name: '陈伟', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2008-04-10', gender: '男', birthDate: '1978-07-18', talent: null },
        { id: 12, name: '张丽华', title: '高级工程师', education: '博士', category: 'staff', joinDate: '2006-09-01', gender: '女', birthDate: '1976-11-25', talent: '技术骨干' },
        { id: 13, name: '刘德明', title: '高级工程师', education: '硕士', category: 'staff', joinDate: '2009-03-15', gender: '男', birthDate: '1979-04-08', talent: null },
        // 在职人员 - 中级
        { id: 3, name: '张明', title: '工程师', education: '硕士', category: 'staff', joinDate: '2012-08-15', gender: '男', birthDate: '1982-04-08', talent: null },
        { id: 6, name: '赵敏', title: '工程师', education: '本科', category: 'staff', joinDate: '2015-06-20', gender: '女', birthDate: '1985-02-14', talent: null },
        { id: 14, name: '孙志强', title: '工程师', education: '硕士', category: 'staff', joinDate: '2014-09-01', gender: '男', birthDate: '1984-09-30', talent: null },
        { id: 15, name: '周雪梅', title: '工程师', education: '本科', category: 'staff', joinDate: '2016-07-01', gender: '女', birthDate: '1986-12-18', talent: null },
        { id: 16, name: '吴刚', title: '工程师', education: '硕士', category: 'staff', joinDate: '2013-03-15', gender: '男', birthDate: '1983-06-22', talent: null },
        // 在职人员 - 初级
        { id: 4, name: '刘芳', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2018-09-01', gender: '女', birthDate: '1990-11-25', talent: null },
        { id: 7, name: '周强', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2020-07-05', gender: '男', birthDate: '1992-08-30', talent: null },
        { id: 17, name: '黄丽萍', title: '助理工程师', education: '本科', category: 'staff', joinDate: '2021-09-01', gender: '女', birthDate: '1993-03-15', talent: null },
        { id: 18, name: '杨波', title: '助理工程师', education: '硕士', category: 'staff', joinDate: '2022-09-01', gender: '男', birthDate: '1994-07-20', talent: null },
        // 合同制
        { id: 8, name: '吴丽', title: '合同制工程师', education: '硕士', category: 'contract', joinDate: '2021-08-10', gender: '女', birthDate: '1991-03-22', talent: null },
        { id: 9, name: '郑涛', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2022-09-01', gender: '男', birthDate: '1993-12-15', talent: null },
        { id: 10, name: '黄燕', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2023-07-15', gender: '女', birthDate: '1994-06-08', talent: null },
        { id: 19, name: '马超', title: '合同制工程师', education: '硕士', category: 'contract', joinDate: '2022-03-01', gender: '男', birthDate: '1992-10-12', talent: null },
        { id: 20, name: '林小红', title: '合同制助理', education: '本科', category: 'contract', joinDate: '2024-01-10', gender: '女', birthDate: '1995-02-28', talent: null },
    ],
    // 近十年拟退休名单
    retirePersons: [
        { id: 1, name: '王建国', title: '正高级工程师', education: '博士', gender: '男', birthDate: '1968-05-20', retireDate: '2028-05-20', retireType: '正高' },
        { id: 2, name: '李秀英', title: '高级工程师', education: '硕士', gender: '女', birthDate: '1975-09-12', retireDate: '2030-09-12', retireType: '副高' },
        { id: 5, name: '陈伟', title: '高级工程师', education: '硕士', gender: '男', birthDate: '1978-07-18', retireDate: '2038-07-18', retireType: '副高' },
    ],
    // 离退休人员名单（使用与学院相同的生成函数）
    retiredPersons: generateRetiredPersons(),
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

// 初始化总览页图表（学历分布、职称分布、三年趋势）
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
                datasets: [{ data: [68, 22, 10], backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.quaternary], borderWidth: 0 }]
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
                datasets: [{ data: [15, 18, 12, 7], backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }

    // 学院三年趋势迷你图（专任教师/非专任教师）
    const college3YearCtx = document.getElementById('college-3year-trend');
    if (college3YearCtx) {
        new Chart(college3YearCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2022', '2023', '2024'],
                datasets: [
                    {
                        label: '专任教师',
                        data: [42, 47, 52],
                        borderColor: chartColors.primary,
                        backgroundColor: 'rgba(140, 21, 21, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: chartColors.primary,
                        pointRadius: 4,
                        borderWidth: 2
                    },
                    {
                        label: '非专任教师',
                        data: [43, 45, 48],
                        borderColor: chartColors.secondary,
                        backgroundColor: 'rgba(184, 134, 11, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: chartColors.secondary,
                        pointRadius: 4,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                ...chartOptions,
                plugins: { legend: { display: true, position: 'bottom', labels: { padding: 8, usePointStyle: true, pointStyle: 'circle', font: { size: 10 } } } },
                scales: {
                    y: { beginAtZero: false, min: 30, max: 60, grid: { color: '#F3F4F6' }, ticks: { font: { size: 10 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 10 } } }
                }
            }
        });
    }

    // 部门学历分布图表
    const deptEduCtx = document.getElementById('dept-edu-chart');
    if (deptEduCtx) {
        new Chart(deptEduCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['博士', '硕士', '本科及以下'],
                datasets: [{ data: [3, 4, 3], backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.quaternary], borderWidth: 0 }]
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
                datasets: [{ data: [1, 3, 4, 2], backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary], borderWidth: 0 }]
            },
            options: { ...chartOptions, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } } }
        });
    }

    // 部门三年趋势迷你图（在职/合同制）
    const dept3YearCtx = document.getElementById('dept-3year-trend');
    if (dept3YearCtx) {
        new Chart(dept3YearCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2022', '2023', '2024'],
                datasets: [
                    {
                        label: '在职',
                        data: [12, 14, 15],
                        borderColor: chartColors.primary,
                        backgroundColor: 'rgba(140, 21, 21, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: chartColors.primary,
                        pointRadius: 4,
                        borderWidth: 2
                    },
                    {
                        label: '合同制',
                        data: [3, 4, 5],
                        borderColor: chartColors.secondary,
                        backgroundColor: 'rgba(184, 134, 11, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: chartColors.secondary,
                        pointRadius: 4,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                ...chartOptions,
                plugins: { legend: { display: true, position: 'bottom', labels: { padding: 8, usePointStyle: true, pointStyle: 'circle', font: { size: 10 } } } },
                scales: {
                    y: { beginAtZero: false, min: 0, max: 20, grid: { color: '#F3F4F6' }, ticks: { font: { size: 10 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 10 } } }
                }
            }
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
    if (collegeCharts.trend2) return;
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false
    };

    // 合同制趋势（双折线：入职/减离）
    const trendCtx2 = document.getElementById('college-contract-trend');
    if (trendCtx2) {
        try {
            collegeCharts.trend2 = new Chart(trendCtx2.getContext('2d'), {
                type: 'line',
                data: {
                    labels: contractTrendData.labels,
                    datasets: [
                        { label: contractTrendData.join.label, data: contractTrendData.join.data, borderColor: chartColors.primary, backgroundColor: 'rgba(140, 21, 21, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.primary },
                        { label: contractTrendData.leave.label, data: contractTrendData.leave.data, borderColor: chartColors.quaternary, backgroundColor: 'rgba(112, 128, 144, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.quaternary }
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
                        { label: postdocTrendData.join.label, data: postdocTrendData.join.data, borderColor: chartColors.secondary, backgroundColor: 'rgba(184, 134, 11, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.secondary },
                        { label: postdocTrendData.leave.label, data: postdocTrendData.leave.data, borderColor: chartColors.tertiary, backgroundColor: 'rgba(44, 62, 80, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.tertiary }
                    ]
                },
                options: { ...chartOptions, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 12 } } } }, scales: { y: { beginAtZero: true, grid: { color: '#F3F4F6' } }, x: { grid: { display: false } } } }
            });
        } catch (e) {}
    }
}

function initDepartmentCharts() {
    // 检查是否已经初始化过
    if (departmentCharts.trend3) return;
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false
    };

    // 合同制入职/减离趋势
    const trendCtx3 = document.getElementById('dept-contract-trend');
    if (trendCtx3) {
        try {
            departmentCharts.trend3 = new Chart(trendCtx3.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    datasets: [
                        { label: '入职', data: [2, 3, 2, 3, 2], borderColor: chartColors.primary, backgroundColor: 'rgba(140, 21, 21, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.primary },
                        { label: '减离', data: [1, 1, 2, 1, 1], borderColor: chartColors.quaternary, backgroundColor: 'rgba(112, 128, 144, 0.1)', tension: 0.4, fill: false, pointBackgroundColor: chartColors.quaternary }
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
        document.querySelectorAll('#page-analysis-college .level-2 .tab-item').forEach(t => t.classList.remove('active'));
        const firstL2 = document.querySelector('#page-analysis-college .level-2 .tab-item');
        if (firstL2) firstL2.classList.add('active');
    }
}

// 初始化分析内容
function initAnalysisContent() {
    if (currentTab !== 'analysis') return;
    
    if (currentUnitType === 'college') {
        showCollegeAnalysisTab('age');
    } else {
        showDeptAnalysisTab('age');
    }
}

// 显示学院分析一级Tab
function showCollegeAnalysisTab(tab) {
    // 隐藏所有内容区
    document.getElementById('analysis-cross-content').style.display = 'none';
    document.getElementById('analysis-age-content').style.display = 'none';
    document.getElementById('analysis-title-content').style.display = 'none';
    document.getElementById('analysis-edu-content').style.display = 'none';
    
    // 显示对应内容区（使用当前筛选状态）
    if (tab === 'age') {
        document.getElementById('analysis-age-content').style.display = 'block';
        initCollegeAgeChart();
    } else if (tab === 'title') {
        document.getElementById('analysis-title-content').style.display = 'block';
        initCollegeTitleAnalysisChart();
    } else if (tab === 'edu') {
        document.getElementById('analysis-edu-content').style.display = 'block';
        initCollegeEduAnalysisChart();
    } else if (tab === 'cross') {
        document.getElementById('analysis-cross-content').style.display = 'block';
        // 初始化交叉分析二级Tab状态
        document.querySelectorAll('#page-analysis-college .level-3 .tab-item').forEach(t => t.classList.remove('active'));
        const firstTab = document.querySelector('#page-analysis-college .level-3 .tab-item');
        if (firstTab) firstTab.classList.add('active');
        showStaffDistribution('title-edu', currentStaffFilter);
    }
}

// 显示部门分析一级Tab
function showDeptAnalysisTab(tab) {
    // 隐藏所有内容区
    document.getElementById('dept-analysis-cross-content').style.display = 'none';
    document.getElementById('dept-analysis-age-content').style.display = 'none';
    document.getElementById('dept-analysis-title-content').style.display = 'none';
    document.getElementById('dept-analysis-edu-content').style.display = 'none';
    
    // 显示对应内容区
    if (tab === 'age') {
        document.getElementById('dept-analysis-age-content').style.display = 'block';
        initDeptAgeChart();
    } else if (tab === 'title') {
        document.getElementById('dept-analysis-title-content').style.display = 'block';
        initDeptTitleAnalysisChart();
    } else if (tab === 'edu') {
        document.getElementById('dept-analysis-edu-content').style.display = 'block';
        initDeptEduAnalysisChart();
    } else if (tab === 'cross') {
        document.getElementById('dept-analysis-cross-content').style.display = 'block';
        // 初始化交叉分析二级Tab状态
        document.querySelectorAll('#page-analysis-department .level-3 .tab-item').forEach(t => t.classList.remove('active'));
        const firstTab = document.querySelector('#page-analysis-department .level-3 .tab-item');
        if (firstTab) firstTab.classList.add('active');
        showDeptDistribution('dept-title-edu');
    }
}

// 存储图表实例以便销毁
let collegeAgeChart = null;
let collegeTitleAnalysisChart = null;
let collegeEduAnalysisChart = null;
let deptAgeChart = null;
let deptTitleAnalysisChart = null;
let deptEduAnalysisChart = null;

// 学院年龄构成图表
function initCollegeAgeChart() {
    const ctx = document.getElementById('college-age-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (collegeAgeChart) {
        collegeAgeChart.destroy();
        collegeAgeChart = null;
    }
    
    const filterData = ageCompositionData[currentStaffFilter] || ageCompositionData.all;
    
    collegeAgeChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
            datasets: [{
                data: filterData.data,
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary, chartColors.quinary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
    
    // 更新指标卡数据
    updateAgeIndicators(filterData);
}

// 更新年龄指标卡
function updateAgeIndicators(data) {
    const percentEl = document.querySelector('#analysis-age-content .rank-value');
    const avgAgeEl = document.querySelectorAll('#analysis-age-content .rank-value')[1];
    const rankEl = document.querySelector('#analysis-age-content .rank-badge');
    
    if (percentEl) percentEl.textContent = data.percent35 + '%';
    if (avgAgeEl) avgAgeEl.textContent = data.avgAge + '岁';
    if (rankEl) {
        rankEl.textContent = '同类' + data.rank + ' · ' + data.rankLevel;
        rankEl.className = 'rank-badge ' + (data.rankLevel === '上游' ? 'good' : data.rankLevel === '中上游' ? 'medium' : data.rankLevel === '中下游' ? 'warning' : 'danger');
    }
}

// 学院职称构成图表
function initCollegeTitleAnalysisChart() {
    const ctx = document.getElementById('college-title-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (collegeTitleAnalysisChart) {
        collegeTitleAnalysisChart.destroy();
        collegeTitleAnalysisChart = null;
    }
    
    const filterData = titleCompositionData[currentStaffFilter] || titleCompositionData.all;
    
    collegeTitleAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['正高', '副高', '中级', '初级'],
            datasets: [{
                data: filterData.data,
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
    
    // 更新指标卡数据
    updateTitleIndicators(filterData);
}

// 更新职称指标卡
function updateTitleIndicators(data) {
    const percentEl = document.querySelector('#analysis-title-content .rank-value');
    const countEl = document.querySelectorAll('#analysis-title-content .rank-value')[1];
    const rankEl = document.querySelector('#analysis-title-content .rank-badge');
    
    if (percentEl) percentEl.textContent = data.percentSenior + '%';
    if (countEl) countEl.textContent = data.正高Count + '人';
    if (rankEl) {
        rankEl.textContent = '同类' + data.rank + ' · ' + data.rankLevel;
        rankEl.className = 'rank-badge ' + (data.rankLevel === '上游' ? 'good' : data.rankLevel === '中上游' ? 'medium' : data.rankLevel === '中下游' ? 'warning' : 'danger');
    }
}

// 学院学历构成图表
function initCollegeEduAnalysisChart() {
    const ctx = document.getElementById('college-edu-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (collegeEduAnalysisChart) {
        collegeEduAnalysisChart.destroy();
        collegeEduAnalysisChart = null;
    }
    
    const filterData = eduCompositionData[currentStaffFilter] || eduCompositionData.all;
    
    collegeEduAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['博士', '硕士', '本科及以下'],
            datasets: [{
                data: filterData.data,
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
    
    // 更新指标卡数据
    updateEduIndicators(filterData);
}

// 更新学历指标卡
function updateEduIndicators(data) {
    const percentEl = document.querySelector('#analysis-edu-content .rank-value');
    const masterEl = document.querySelectorAll('#analysis-edu-content .rank-value')[1];
    const rankEl = document.querySelector('#analysis-edu-content .rank-badge');
    
    if (percentEl) percentEl.textContent = data.percentPhd + '%';
    if (masterEl) masterEl.textContent = data.percentMaster + '%';
    if (rankEl) {
        rankEl.textContent = '同类' + data.rank + ' · ' + data.rankLevel;
        rankEl.className = 'rank-badge ' + (data.rankLevel === '上游' ? 'good' : data.rankLevel === '中上游' ? 'medium' : data.rankLevel === '中下游' ? 'warning' : 'danger');
    }
}

// 学院职称构成图表
function initCollegeTitleAnalysisChart() {
    const ctx = document.getElementById('college-title-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (collegeTitleAnalysisChart) {
        collegeTitleAnalysisChart.destroy();
        collegeTitleAnalysisChart = null;
    }
    
    collegeTitleAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['正高', '副高', '中级', '初级'],
            datasets: [{
                data: [15, 18, 12, 7],
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
}

// 学院学历构成图表
function initCollegeEduAnalysisChart() {
    const ctx = document.getElementById('college-edu-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (collegeEduAnalysisChart) {
        collegeEduAnalysisChart.destroy();
        collegeEduAnalysisChart = null;
    }
    
    collegeEduAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['博士', '硕士', '本科及以下'],
            datasets: [{
                data: [68, 22, 10],
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
}

// 部门年龄构成图表
function initDeptAgeChart() {
    const ctx = document.getElementById('dept-age-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (deptAgeChart) {
        deptAgeChart.destroy();
        deptAgeChart = null;
    }
    
    deptAgeChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['30岁以下', '30-40', '40-50', '50-60', '60以上'],
            datasets: [{
                data: [3, 5, 6, 4, 2],
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary, chartColors.quinary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
}

// 部门职称构成图表
function initDeptTitleAnalysisChart() {
    const ctx = document.getElementById('dept-title-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (deptTitleAnalysisChart) {
        deptTitleAnalysisChart.destroy();
        deptTitleAnalysisChart = null;
    }
    
    deptTitleAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['正高', '副高', '中级', '初级'],
            datasets: [{
                data: [2, 3, 4, 2],
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
}

// 部门学历构成图表
function initDeptEduAnalysisChart() {
    const ctx = document.getElementById('dept-edu-analysis-chart');
    if (!ctx) return;
    
    // 销毁旧图表
    if (deptEduAnalysisChart) {
        deptEduAnalysisChart.destroy();
        deptEduAnalysisChart = null;
    }
    
    deptEduAnalysisChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['博士', '硕士', '本科及以下'],
            datasets: [{
                data: [3, 4, 3],
                backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.quaternary],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } } }
        }
    });
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
    
    // 所有交叉分析都使用表格形式
    area.innerHTML = renderDistributionTable(tab, currentStaffFilter);
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
    const eduColors = [chartColors.primary, chartColors.secondary, chartColors.quaternary];
    if (filter === 'all' || filter === 'teacher') {
        d.all.edu.forEach((e, idx) => {
            datasets.push({ label: e.label + '·专任', data: e.teacher, backgroundColor: eduColors[idx], borderRadius: 4 });
        });
    }
    if (filter === 'all' || filter === 'non-teacher') {
        d.all.edu.forEach((e, idx) => {
            datasets.push({ label: e.label + '·非专任', data: e.nonTeacher, backgroundColor: eduColors[idx] + '88', borderRadius: 4 });
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

// 渲染分布表格（职称×学历、学历×年龄、性别、学缘）
function renderDistributionTable(tab, filter) {
    if (tab === 'title-edu') {
        const d = staffDistributionData.titleEdu;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        // 表头：博士、硕士、本科
        d.all.edu.forEach(e => { html += `<th>${e.label}</th>`; });
        html += '<th>合计</th></tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            let rowTotal = 0;
            d.all.edu.forEach(e => {
                let val = 0;
                if (filter === 'all' || filter === 'teacher') val += e.teacher[i];
                if (filter === 'all' || filter === 'non-teacher') val += e.nonTeacher[i];
                rowTotal += val;
                html += `<td>${val}</td>`;
            });
            html += `<td><strong>${rowTotal}</strong></td></tr>`;
        });
        
        // 合计行
        html += '<tr style="font-weight: 600; background: var(--gray-50);"><td>合计</td>';
        let grandTotal = 0;
        d.all.edu.forEach(e => {
            let colTotal = 0;
            d.labels.forEach((_, i) => {
                if (filter === 'all' || filter === 'teacher') colTotal += e.teacher[i];
                if (filter === 'all' || filter === 'non-teacher') colTotal += e.nonTeacher[i];
            });
            grandTotal += colTotal;
            html += `<td>${colTotal}</td>`;
        });
        html += `<td>${grandTotal}</td></tr>`;
        
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'title-age') {
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
// 显示职能部门分析内容（表格形式）
function showDeptDistribution(tab) {
    currentAnalysisTab = tab;
    
    // 只更新level-3的Tab状态（交叉分析维度）
    const tabContainer = document.querySelectorAll('#page-analysis-department .level-3 .tab-item');
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
    
    // 所有交叉分析都使用表格形式
    area.innerHTML = renderDeptTable(tab);
}

// 渲染职能部门图表（仅职称×学历）
function renderDeptChart(canvas) {
    if (currentAnalysisChart) {
        currentAnalysisChart.destroy();
        currentAnalysisChart = null;
    }
    
    const d = deptDistributionData.titleEdu;
    const deptColors = [chartColors.primary, chartColors.secondary, chartColors.quaternary];
    const datasets = d.edu.map((e, idx) => ({
        label: e.label,
        data: e.data,
        backgroundColor: deptColors[idx],
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
    if (tab === 'dept-title-edu') {
        const d = deptDistributionData.titleEdu;
        let html = '<div class="data-table"><table><thead><tr><th>职称</th>';
        d.edu.forEach(e => { html += `<th>${e.label}</th>`; });
        html += '<th>合计</th></tr></thead><tbody>';
        
        d.labels.forEach((title, i) => {
            html += `<tr><td>${title}</td>`;
            let rowTotal = 0;
            d.edu.forEach(e => {
                rowTotal += e.data[i];
                html += `<td>${e.data[i]}</td>`;
            });
            html += `<td><strong>${rowTotal}</strong></td></tr>`;
        });
        
        // 合计行
        html += '<tr style="font-weight: 600; background: var(--gray-50);"><td>合计</td>';
        let grandTotal = 0;
        d.edu.forEach(e => {
            let colTotal = e.data.reduce((a, b) => a + b, 0);
            grandTotal += colTotal;
            html += `<td>${colTotal}</td>`;
        });
        html += `<td>${grandTotal}</td></tr>`;
        
        html += '</tbody></table></div>';
        return html;
        
    } else if (tab === 'dept-title-age') {
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

// 渲染离退休名单
function renderRetiredList(persons, unitType) {
    const containerId = unitType === 'college' ? 'retired-list' : 'retired-list-dept';
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = persons.map(person => `
        <div class="person-item" onclick="showRetiredDetail(${JSON.stringify(person).replace(/"/g, '&quot;')}, '${unitType}')">
            <div class="person-avatar">${person.name.charAt(0)}</div>
            <div class="person-info">
                <div class="person-name">
                    ${person.name}
                    <span class="person-tag">${person.retireType}</span>
                </div>
                <div class="person-detail">${person.title} · 离退休：${person.retiredDate}</div>
            </div>
        </div>
    `).join('');
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
    
    // 分析一级Tab切换 - 学院
    document.querySelectorAll('#page-analysis-college .level-2 .tab-item').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('#page-analysis-college .level-2 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showCollegeAnalysisTab(this.dataset.analysisTab);
        });
    });

    // 分析二级Tab切换 - 学院（交叉分析维度）
    document.querySelectorAll('#page-analysis-college .level-3 .tab-item').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('#page-analysis-college .level-3 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showStaffDistribution(this.dataset.tab, currentStaffFilter);
        });
    });

    // 分析一级Tab切换 - 部门
    document.querySelectorAll('#page-analysis-department .level-2 .tab-item').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('#page-analysis-department .level-2 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showDeptAnalysisTab(this.dataset.analysisTab);
        });
    });

    // 分析二级Tab切换 - 部门（交叉分析维度）
    document.querySelectorAll('#page-analysis-department .level-3 .tab-item').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('#page-analysis-department .level-3 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showDeptDistribution(this.dataset.tab);
        });
    });
    
    // 专任教师/非专任教师筛选 - 学院
    document.querySelectorAll('#page-analysis-college .type-chip[data-filter]').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('#page-analysis-college .type-chip[data-filter]').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // 更新筛选状态
            currentStaffFilter = this.dataset.filter;
            
            // 获取当前激活的一级Tab
            const activeAnalysisTab = document.querySelector('#page-analysis-college .level-2 .tab-item.active');
            if (activeAnalysisTab) {
                const analysisTab = activeAnalysisTab.dataset.analysisTab;
                
                // 根据当前Tab刷新对应的数据
                if (analysisTab === 'cross') {
                    const activeTab = document.querySelector('#page-analysis-college .level-3 .tab-item.active');
                    const tabName = activeTab ? activeTab.dataset.tab : 'title-edu';
                    showStaffDistribution(tabName, currentStaffFilter);
                } else if (analysisTab === 'age') {
                    initCollegeAgeChart();
                } else if (analysisTab === 'title') {
                    initCollegeTitleAnalysisChart();
                } else if (analysisTab === 'edu') {
                    initCollegeEduAnalysisChart();
                }
            }
        });
    });
    
    // 分析二级Tab切换 - 部门（交叉分析维度）
    document.querySelectorAll('#page-analysis-department .level-3 .tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('#page-analysis-department .level-3 .tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showDeptDistribution(this.dataset.tab);
        });
    });
}

// 过滤人员列表 - 学院
function filterPersonList() {
    const keyword = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    const personList = document.getElementById('person-list');
    const retireList = document.getElementById('retire-list');
    const retiredList = document.getElementById('retired-list');
    
    // 隐藏所有列表
    personList.style.display = 'none';
    retireList.style.display = 'none';
    retiredList.style.display = 'none';
    
    if (currentType === 'retire') {
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
    
    if (currentType === 'retired') {
        retiredList.style.display = 'block';
        
        let filteredRetiredPersons = collegeData.retiredPersons;
        if (keyword) {
            filteredRetiredPersons = filteredRetiredPersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.title.toLowerCase().includes(keyword)
            );
        }
        renderRetiredList(filteredRetiredPersons, 'college');
        return;
    }
    
    personList.style.display = 'block';
    
    let filtered = collegeData.persons;
    
    if (currentType === 'talent') {
        filtered = filtered.filter(p => p.talent);
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
    const retiredList = document.getElementById('retired-list-dept');
    
    // 隐藏所有列表
    personList.style.display = 'none';
    retireList.style.display = 'none';
    retiredList.style.display = 'none';
    
    if (currentType === 'retire') {
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
    
    if (currentType === 'retired') {
        retiredList.style.display = 'block';
        
        let filteredRetiredPersons = departmentData.retiredPersons || [];
        if (keyword) {
            filteredRetiredPersons = filteredRetiredPersons.filter(p => 
                p.name.toLowerCase().includes(keyword) ||
                p.title.toLowerCase().includes(keyword)
            );
        }
        renderRetiredList(filteredRetiredPersons, 'department');
        return;
    }
    
    personList.style.display = 'block';
    
    let filtered = departmentData.persons;
    
    if (currentType === 'talent') {
        filtered = filtered.filter(p => p.talent);
    }
    
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
            // 重置一级Tab状态
            document.querySelectorAll('#page-analysis-college .level-2 .tab-item').forEach(t => t.classList.remove('active'));
            const firstL2 = document.querySelector('#page-analysis-college .level-2 .tab-item');
            if (firstL2) firstL2.classList.add('active');
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    showCollegeAnalysisTab('age');
                    initCollegeCharts();
                });
            });
        } else {
            // 重置一级Tab状态
            document.querySelectorAll('#page-analysis-department .level-2 .tab-item').forEach(t => t.classList.remove('active'));
            const firstL2 = document.querySelector('#page-analysis-department .level-2 .tab-item');
            if (firstL2) firstL2.classList.add('active');
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    showDeptAnalysisTab('age');
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

// 显示离退休人员详情
function showRetiredDetail(personData, unitType) {
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
                <span class="detail-label">离退休日期</span>
                <span class="detail-value" style="color: #DC2626; font-weight: 600;">${personData.retiredDate}</span>
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
