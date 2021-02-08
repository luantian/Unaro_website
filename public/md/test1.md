# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~

> 这是引用的内容
>> 这是引用的内容
>>> 这是引用的内容
>>>> 这是引用的内容

[简书](http://jianshu.com)
[百度](http://baidu.com)

- 列表内容
+ 列表内容
* 列表内容

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
内容|内容|内容


``` javascript
  const stripe = require('stripe')('sk_test')
  await stripe.paymentIntents.create({
    amount: 2000,
    currentcy: 'usd'
  })
```

```
  def a(index):
    print(index)
```

``` java
  class Node {
    private String name = 'terence'
    private Number age = 18

    public String getName() {
      return this.name
    }

    public void setName(name) {
      this.name = name
    }

    public Number getAge() {
      return this.age
    }

    public void setAge(age) {
      this.age = age
    }
  }
```

``` html
  <form>
    <input value="nihao" placeholder="请输入你想要输入的内容"/>
  </form>
```
