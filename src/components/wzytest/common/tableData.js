const table1 = {
    title: [
        { id: 'seatNo', label: "坐好" },
        { id: "name", label: "姓名" },
        {
            id: 3,
            label: "党团活动",
            child: [
                { id: "3-01", label: "累计次数（次）" },
                { id: "3-02", label: "累计时间（小时）" }
            ]
        },
        {
            id: 4,
            label: "社团活动",
            child: [
                { id: "4-01", label: "累计次数（次）" },
                { id: "4-02", label: "累计时间（小时）" }
            ]
        },
        {
            id: 5,
            label: "志愿活动",
            child: [
                { id: "5-01", label: "累计次数（次）" },
                { id: "5-02", label: "累计时间（小时）" }
            ]
        }
    ],
    data: [
        {
            name: "张三",
            userId: 700,
            "seatNo": 1,
            "3-01": 2,
            "3-02": 20,
            "4-01": 2,
            "4-02": 234234,
            "5-01": 2,
            "5-02": 20
        },
        {
            name: "李四",
            userId: 701,

            "seatNo": 1,
            "3-01": 2,
            "3-02": 23423,
            "4-01": 2,
            "4-02": 234,
            "5-01": 22,
            "5-02": 78
        },
        {
            name: "王五",
            userId: 702,
            "seatNo": 1,
            "3-01": 72,
            "3-02": 579,
            "4-01": 3092,
            "4-02": 3476,
            "5-01": 62,
            "5-02": 20
        }
    ]
}
const table2 = {
    title: [
        { id: '1', label: '座号' },
        { id: '2', label: '姓名' },
        { id: '3', label: '先进个人荣誉称号' },
        { id: '4', label: '日期' },
        { id: '5', label: '级别' },
        { id: '6', label: '评选单位' }
    ],
    data: [
        { 'userId': 1, '1': 1, '2': 'bluceLi', '3': '国家级优秀学生', '4': '2015-02-02', '5': 3, '6': '某单位' },
        { 'userId': 2, '1': 2, '2': '赵四', '3': '国家级优秀学生', '4': '2015-02-02', '5': 3, '6': '某单位', rowspan: 2 },
        { 'userId': 2, '1': 2, '2': '赵四', '3': '国家级优秀学生', '4': '2015-02-02', '5': 1, '6': '某单位', rowspan: 0 },
        { 'userId': 3, '1': 1, '2': '宝田', '3': '国家级优秀学生', '4': '2015-02-02', '5': 2, '6': '某单位' },
        { 'userId': 4, '1': 1, '2': '爱国', '3': '国家级优秀学生', '4': '2015-02-02', '5': 2, '6': '某单位' },
    ]
}





const tableDatas = {
    table1,
    table2
}

export default tableDatas