# api

## 基本信息

* baseURL: http://127.0.0.1:8000

* 接口响应整体结构:

```json
{
    "code": 0,      // 0 表示正常响应, 1 表示错误响应
    "errMsg": "",   // 错误提示(当 code=1 时, errMsg 才有值)
    "data": {}      // 响应数据(当 code=1 时, data 没有值或为空)
}
```

## 分析提交

* path: /analyze/commit

* method: post

* params: json

```json
{
    "email": "www@sma.com",        // 邮箱
    "data": "https://www.sma.com"  // 待分析的url
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "identifier": "IefeHe323d" // 标识符, 用于分析页面展示
    }
}
```

## 问题反馈

* path: /feedback/commit

* method: post

* params: json

```json
{
    "contact": "www@sma.com",     // 联系方式: 电话/邮箱
    "content": "data is good",    // 反馈内容
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {}
}
```

## 检测任务是否存在

该接口会检测任务是否完成，如果任务不存在或者正在处理中会返回错误
返回的信息用于查询后续信息

* path: /task/<identifier>

* method: get

* params:

* response: 

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "pmcode": "amazon",
        "pmsin": "B09KNCDSWN"
    }
}
```

## 获取 Overview

接口字段待完善

* path: /product/overview

* method: post

* params: json

```json
{
    "pmcode": "amazon",
    "pmsin": "B09KNCDSWN"
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "pmcode": "amazon",
        "pmsin": "B09KNCDSWN", // asin
        "title": "Sport Bands Compatible with Apple Watch",
        "price": "$13.12",
        "brand": "Apple",
        "rank": "#14 in Cell Phones & Accessories",
        "starnum": "12096",
        "score": "4.7",

        // customer reviews
        "reviewstat": {
            "score5percent": "80%",
            "score4percent": "13%",
            "score3percent": "4%",
            "score2percent": "1%",
            "score1percent": "2%",
        },
        // by feature
        "scoresbyfeature": {
            "Easy to use": "4.8",
            "Value for money": "4.7",
            "Easy to install": "4.7",
            "Comfort": "4.7",
            "Durability": "4.7",
            "Easy to remove": "4.6",
        }
    }
}
```

## 获取 Product details

接口字段待完善

* path: /product/details

* method: post

* params: json

```json
{
    "pmcode": "amazon",
    "pmsin": "B09KNCDSWN",
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "featurebybullets": "About this item Earn Active Zone Minutes as you progress toward your weekly 150 minutes of heart-pumping activity and use 20 plus exercise modes to track goals like distance, calories burned and more.Operating temperature: 14° to 113°F.Water resistance depth:50 meters Track all-day activity: your steps, distance, hourly activity and calories burned.Maximum operating altitude: 28,000 ft Use 24x7 heart rate to track resting heart rate & better measure calorie burn Enjoy 10 days of battery life for daily progress without constant charging. Varies with use and other factors. Track your time in light, deep and REM sleep, then get a Sleep Score to better understand your sleep quality each night.Stay inspired from the shower to the pool with this swimproof tracker (water resistant to 50 meters) and motivated by connecting with friends, competing in challenges, earning badges and celebrating goal milestones.",
    }
}
```

## 获取 Review analysis -> product selling point / defects

接口字段待完善

* path: /analysis/sentobject

* method: post

* params: json

```json
{
    "pmcode": "amazon",     // 平台
    "pmsin": "B09KNCDSWN",  // 平台标识符
    "before": "2022-10-31", // 开始日期
    "after": "2022-11-11",  // 截止日期

    "polarity": 1,  // 极性=> 大于零: selling point; 小于零: defects; 默认等于零: 搜索全部
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "sentobject": [
            {
                "word": "it",
                "count": 10,
                "score": 14.37,
                "relatives": [
                    {
                        "id": "634aae475e5fecc2697375ad",
                        "clause": "I use it at conferences when they forget to get me near outlets",
                        "baseoff": 0,
                        "index": "6,8",
                        "link": "https://www.amazon.com/gp/customer-reviews/R3S56T4IGRMQ85/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B09FF46FQ9"
                    },
                    ...
                ]
            },
            ...
        ]
    }
}
```

## 获取 Review analysis -> product sellingpoint/defects -> sentreason

接口字段待完善

* path: /analysis/sentreason

* method: post

* params: json

```json
{
    "pmcode": "amazon",     // 平台
    "pmsin": "B09KNCDSWN",  // 平台标识符
    "before": "2022-10-31", // 开始日期
    "after": "2022-11-11",  // 截止日期

    "sentobject": "general quality", // 关联的情感对象
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "sentreason": [
            {
                "word": "pretty good",
                "count": 10,
                "score": 14.37,
                "relatives": [
                    {
                        "id": "634aae475e5fecc2697375ad",
                        "clause": "I use it at conferences when they forget to get me near outlets",
                        "baseoff": 0,
                        "index": "6,8",
                        "link": "https://www.amazon.com/gp/customer-reviews/R3S56T4IGRMQ85/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B09FF46FQ9"
                    },
                    ...
                ]
            },
            ...
        ]
    }
}
```

## 获取 Review analysis -> purchase intent

接口字段待完善

* path: /analysis/buyintent

* method: post

* params: json

```json
{
    "pmcode": "amazon",     // 平台
    "pmsin": "B09KNCDSWN",  // 平台标识符
    "before": "2022-10-31", // 开始日期
    "after": "2022-11-11",  // 截止日期
}
```

* response:

```json
{
    "code": 0,
    "errMsg": "",
    "data": {
        "buyintent": [
            {
                "word": "pretty good",
                "count": 10,
                "score": 14.37,
                "relatives": [
                    {
                        "id": "634aae475e5fecc2697375ad",
                        "clause": "I use it at conferences when they forget to get me near outlets",
                        "baseoff": 0,
                        "index": "6,8",
                        "link": "https://www.amazon.com/gp/customer-reviews/R3S56T4IGRMQ85/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B09FF46FQ9"
                    },
                    ...
                ]
            },
            ...
        ]
    }
}
```