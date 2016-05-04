## Modules

<dl>
<dt><a href="#module_clearPunctuations">clearPunctuations</a></dt>
<dd></dd>
<dt><a href="#module_isEmail">isEmail</a></dt>
<dd></dd>
<dt><a href="#module_isQQNumber">isQQNumber</a></dt>
<dd></dd>
<dt><a href="#module_zh/chars">zh/chars</a></dt>
<dd></dd>
<dt><a href="#module_zh/isIDCardNumber">zh/isIDCardNumber</a></dt>
<dd></dd>
<dt><a href="#module_zh/isPhoneNumber">zh/isPhoneNumber</a></dt>
<dd></dd>
<dt><a href="#module_zh/isPostcode">zh/isPostcode</a></dt>
<dd></dd>
</dl>

<a name="module_clearPunctuations"></a>

## clearPunctuations
<a name="module_clearPunctuations..clearPunctuations"></a>

### clearPunctuations~clearPunctuations(value, exclude) ⇒ <code>string</code>
----
> 默认清除的字符如下

- 英文: !"#$%&\'(){}=-/~^|*:+;_
- 中文: 。，！？、；“”‘’～－─…｀·：【】〔〕［］﹏＄＾＋＝｜（）＜＞￥×《》「」

----

**Kind**: inner method of <code>[clearPunctuations](#module_clearPunctuations)</code>  
**Returns**: <code>string</code> - cleared string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |
| exclude | <code>regexp</code> | exclude chars |

**Example**  
```js
clearPunctuations('[bookname]-gitbook', /[_\-]/g);
// return bookname-gitbook
```
<a name="module_isEmail"></a>

## isEmail
<a name="module_isEmail..isEmail"></a>

### isEmail~isEmail(value) ⇒ <code>boolean</code>
Check string is a email address

**Kind**: inner method of <code>[isEmail](#module_isEmail)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

<a name="module_isQQNumber"></a>

## isQQNumber
<a name="module_isQQNumber..isQQNumber"></a>

### isQQNumber~isQQNumber(value) ⇒ <code>boolean</code>
----
> 格式说明

- 1-9 开头, 最少 5 位

----

**Kind**: inner method of <code>[isQQNumber](#module_isQQNumber)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

<a name="module_zh/chars"></a>

## zh/chars
**Author:** Justin Hao  
<a name="module_zh/chars..isAllChineseChars"></a>

### zh/chars~isAllChineseChars(value, ext) ⇒ <code>boolean</code>
判断字符串是否完全由中文字符组成

**Kind**: inner method of <code>[zh/chars](#module_zh/chars)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | 待检查的字符串 |
| ext | <code>string</code> | 需要排除的字符串列表, 请注意使用正则转义字符 |

<a name="module_zh/isIDCardNumber"></a>

## zh/isIDCardNumber
<a name="module_zh/isIDCardNumber..isIDCardNumber"></a>

### zh/isIDCardNumber~isIDCardNumber(value) ⇒ <code>boolean</code>
----
> 格式说明

- 15 位或 18 位
- 1~6 位为地区代码
- 7~14 位为出生年月日
- 15~17 位为顺序号，是县、区级政府所辖派出所的分配码
- 18 位为效验位

----

**Kind**: inner method of <code>[zh/isIDCardNumber](#module_zh/isIDCardNumber)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

<a name="module_zh/isPhoneNumber"></a>

## zh/isPhoneNumber

* [zh/isPhoneNumber](#module_zh/isPhoneNumber)
    * [~isMobilePhoneNumber(value)](#module_zh/isPhoneNumber..isMobilePhoneNumber) ⇒ <code>boolean</code>
    * [~isFixedPhoneNumber(value)](#module_zh/isPhoneNumber..isFixedPhoneNumber) ⇒ <code>boolean</code>

<a name="module_zh/isPhoneNumber..isMobilePhoneNumber"></a>

### zh/isPhoneNumber~isMobilePhoneNumber(value) ⇒ <code>boolean</code>
----
> 格式说明

电信
- 2G/3G号段 (CDMA2000 网络) 133, 153, 180, 181, 189
- 4G号段 177
- 卫星手机 1349

联通
- 2G号段（GSM 网络）130, 131, 132, 155, 156
- 3G上网卡 145
- 3G号段 (WCDMA 网络) 185, 186
- 4G号段 176, 185[1]

移动
- 2G号段 (GSM 网络) 134x (0-8), 135, 136, 137, 138, 139, 150, 151, 152, 158, 159, 182, 183, 184
- 3G号段 (TD-SCDMA 网络) 有 157, 187, 188
- 3G上网卡 147
- 4G号段 178

----

**Kind**: inner method of <code>[zh/isPhoneNumber](#module_zh/isPhoneNumber)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

<a name="module_zh/isPhoneNumber..isFixedPhoneNumber"></a>

### zh/isPhoneNumber~isFixedPhoneNumber(value) ⇒ <code>boolean</code>
----
> 格式说明

- 区号 3-4 位, 号码 7-8 位
- 可以有分机号, 分机号为 3-4 位
- 示例: "0775-85333333-123"

----

**Kind**: inner method of <code>[zh/isPhoneNumber](#module_zh/isPhoneNumber)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

<a name="module_zh/isPostcode"></a>

## zh/isPostcode
**Author:** Justin Hao  
<a name="module_zh/isPostcode..isPostcode"></a>

### zh/isPostcode~isPostcode(value) ⇒ <code>boolean</code>
----
> 格式说明

- 大陆地区邮编为 0-8 开头的 6 位数字
- 港澳台地区为 999 开头的 6 位数字

----

**Kind**: inner method of <code>[zh/isPostcode](#module_zh/isPostcode)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | a string |

