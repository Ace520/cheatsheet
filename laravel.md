---
layout: MasonryLayout
title: PHP 函数速查表
icon: laravel.png
---

::: card 数组

* [array_change_key_case](http://php.p2hp.com/manual/zh/function.array-change-key-case.php) - 更改数组中所有键的大小写
* [array_chunk](http://php.p2hp.com/manual/zh/function.array-chunk.php) - 将数组拆分为块
* [array_column](http://php.p2hp.com/manual/zh/function.array-column.php) - 返回输入数组中单个列的值
* [array_combine](http://php.p2hp.com/manual/zh/function.array-combine.php) - 通过使用一个数组作为键而另一个数组作为其值来创建数组
* [array_count_values](http://php.p2hp.com/manual/zh/function.array-count-values.php) - 计算数组的所有值
* [array_diff_assoc](http://php.p2hp.com/manual/zh/function.array-diff-assoc.php) - 使用附加索引检查计算数组的差异
* [array_diff_key](http://php.p2hp.com/manual/zh/function.array-diff-key.php) - 使用密钥计算数组的差异以进行比较
* [array_diff_uassoc](http://php.p2hp.com/manual/zh/function.array-diff-uassoc.php) - 使用用户提供的回调函数执行附加索引检查来计算数组的差异
* [array_diff_ukey](http://php.p2hp.com/manual/zh/function.array-diff-ukey.php) - 使用键上的回调函数计算数组的差异以进行比较
* [array_diff](http://php.p2hp.com/manual/zh/function.array-diff.php) - 计算数组的差异
* [array_fill_keys](http://php.p2hp.com/manual/zh/function.array-fill-keys.php) - 使用值填充数组，指定键
* [array_fill](http://php.p2hp.com/manual/zh/function.array-fill.php) - 使用值填充数组
* [array_filter](http://php.p2hp.com/manual/zh/function.array-filter.php) - 使用回调函数过滤数组的元素
* [array_flip](http://php.p2hp.com/manual/zh/function.array-flip.php) - 在数组中交换所有键及其关联值
* [array_intersect_assoc](http://php.p2hp.com/manual/zh/function.array-intersect-assoc.php) - 使用附加索引检查计算数组的交集
* [array_intersect_key](http://php.p2hp.com/manual/zh/function.array-intersect-key.php) - 使用键进行比较来计算数组的交集
* [array_intersect_uassoc](http://php.p2hp.com/manual/zh/function.array-intersect-uassoc.php) - 使用附加索引检查计算数组的交集，通过回调函数比较索引
* [array_intersect_ukey](http://php.p2hp.com/manual/zh/function.array-intersect-ukey.php) - 使用键上的回调函数计算数组的交集以进行比较
* [array_intersect](http://php.p2hp.com/manual/zh/function.array-intersect.php) - 计算数组的交集
* [array_key_exists](http://php.p2hp.com/manual/zh/function.array-key-exists.php) - 检查数组中是否存在给定的键或索引
* [array_key_first](http://php.p2hp.com/manual/zh/function.array-key-first.php) - 获取数组的第一个键
* [array_key_last](http://php.p2hp.com/manual/zh/function.array-key-last.php) - 获取数组的最后一个键
* [array_keys](http://php.p2hp.com/manual/zh/function.array-keys.php) - 返回数组的所有键或键的子集
* [array_map](http://php.p2hp.com/manual/zh/function.array-map.php) - 将回调应用于给定数组的元素
* [array_merge_recursive](http://php.p2hp.com/manual/zh/function.array-merge-recursive.php) - 递归地合并一个或多个数组
* [array_merge](http://php.p2hp.com/manual/zh/function.array-merge.php) - 合并一个或多个数组
* [array_multisort](http://php.p2hp.com/manual/zh/function.array-multisort.php) - 对多维或多维数组进行排序
* [array_pad](http://php.p2hp.com/manual/zh/function.array-pad.php) - 使用值将数组填充到指定的长度
* [array_pop](http://php.p2hp.com/manual/zh/function.array-pop.php) - 从数组末尾弹出元素
* [array_product](http://php.p2hp.com/manual/zh/function.array-product.php) - 计算数组中值的乘积
* [array_push](http://php.p2hp.com/manual/zh/function.array-push.php) - 将一个或多个元素推送到数组的末尾
* [array_rand](http://php.p2hp.com/manual/zh/function.array-rand.php) - 从数组中选择一个或多个随机密钥
* [array_reduce](http://php.p2hp.com/manual/zh/function.array-reduce.php) - 使用回调函数迭代地将数组减少为单个值
* [array_replace_recursive](http://php.p2hp.com/manual/zh/function.array-replace-recursive.php) - 以递归方式将传递数组中的元素替换为第一个数组
* [array_replace](http://php.p2hp.com/manual/zh/function.array-replace.php) - 将传递的数组中的元素替换为第一个数组
* [array_reverse](http://php.p2hp.com/manual/zh/function.array-reverse.php) - 以相反的顺序返回包含元素的数组
* [array_search](http://php.p2hp.com/manual/zh/function.array-search.php) - 在数组中搜索给定值，如果成功则返回第一个相应的键
* [array_shift移出](http://php.p2hp.com/manual/zh/function.array-shift.php) - 从数组的开头一个元素
* [array_slice](http://php.p2hp.com/manual/zh/function.array-slice.php) - 提取数组的切片
* [array_splice](http://php.p2hp.com/manual/zh/function.array-splice.php) - 删除数组的一部分并将其替换为其他内容
* [array_sum](http://php.p2hp.com/manual/zh/function.array-sum.php) - 计算数组中值的总和
* [array_udiff_assoc](http://php.p2hp.com/manual/zh/function.array-udiff-assoc.php) - 使用附加索引检查计算数组的差异，通过回调函数比较数据
* [array_udiff_uassoc](http://php.p2hp.com/manual/zh/function.array-udiff-uassoc.php) - 使用附加索引检查计算数组的差异，通过回调函数比较数据和索引
* [array_udiff](http://php.p2hp.com/manual/zh/function.array-udiff.php) - 通过使用回调函数进行数据比较来计算数组的差异
* [array_uintersect_assoc](http://php.p2hp.com/manual/zh/function.array-uintersect-assoc.php) - 使用附加索引检查计算数组的交集，通过回调函数比较数据
* [array_uintersect_uassoc](http://php.p2hp.com/manual/zh/function.array-uintersect-uassoc.php) - 使用附加索引检查计算数组的交集，通过单独的回调函数比较数据和索引
* [array_uintersect](http://php.p2hp.com/manual/zh/function.array-uintersect.php) - 计算数组的交集，通过回调函数比较数据
* [array_unique](http://php.p2hp.com/manual/zh/function.array-unique.php) - 从数组中删除重复值
* [array_unshift](http://php.p2hp.com/manual/zh/function.array-unshift.php) - 将一个或多个元素添加到数组的开头
* [array_values](http://php.p2hp.com/manual/zh/function.array-values.php) - 返回数组的所有值
* [array_walk_recursive](http://php.p2hp.com/manual/zh/function.array-walk-recursive.php) - 递归地将用户函数应用于数组的每个成员
* [array_walk](http://php.p2hp.com/manual/zh/function.array-walk.php) - 将用户提供的函数应用于数组的每个成员
* [array](http://php.p2hp.com/manual/zh/function.array.php) - 创建一个数组
* [arsort](http://php.p2hp.com/manual/zh/function.arsort.php) - 按相反顺序对数组进行排序并保持索引关联
* [asort](http://php.p2hp.com/manual/zh/function.asort.php) - 对数组进行排序并维护索引关联
* [compact](http://php.p2hp.com/manual/zh/function.compact.php) - 创建包含变量及其值的数组
* [count](http://php.p2hp.com/manual/zh/function.count.php) - 计算数组中的所有元素或对象中的某些元素
* [current](http://php.p2hp.com/manual/zh/function.current.php) - 返回数组中的当前元素
* [each](http://php.p2hp.com/manual/zh/function.each.php) - 从数组中返回当前键和值对并使数组光标前进
* [end](http://php.p2hp.com/manual/zh/function.end.php) - 将数组的内部指针设置为其最后一个元素
* [extract](http://php.p2hp.com/manual/zh/function.extract.php) - 将变量从数组导入当前符号表
* [in_array](http://php.p2hp.com/manual/zh/function.in-array.php) - 检查数组中是否存在值
* [key_exists](http://php.p2hp.com/manual/zh/function.key-exists.php) - array_key_exists的别名
* [key](http://php.p2hp.com/manual/zh/function.key.php) - 从数组中获取密钥
* [krsort](http://php.p2hp.com/manual/zh/function.krsort.php) - 按相反顺序按键排序数组
* [ksort](http://php.p2hp.com/manual/zh/function.ksort.php) - 按键排序数组
* [list](http://php.p2hp.com/manual/zh/function.list.php) - 将变量分配为数组
* [natcasesort](http://php.p2hp.com/manual/zh/function.natcasesort.php) - 使用不区分大小写的“自然顺序”算法对数组进行排序
* [natsort](http://php.p2hp.com/manual/zh/function.natsort.php) - 使用“自然顺序”算法对数组进行排序
* [next](http://php.p2hp.com/manual/zh/function.next.php) - 前进阵列的内部指针
* [pos](http://php.p2hp.com/manual/zh/function.pos.php) -  current的别名
* [prev](http://php.p2hp.com/manual/zh/function.prev.php) - 倒回内部数组指针
* [range](http://php.p2hp.com/manual/zh/function.range.php) - 创建包含一系列元素的数组
* [reset](http://php.p2hp.com/manual/zh/function.reset.php) - 将数组的内部指针设置为其第一个元素
* [rsort](http://php.p2hp.com/manual/zh/function.rsort.php) - 按相反顺序对数组进行排序
* [shuffle](http://php.p2hp.com/manual/zh/function.shuffle.php) - 随机播放阵列
* [sizeof](http://php.p2hp.com/manual/zh/function.sizeof.php) -  count别名
* [sort进行](http://php.p2hp.com/manual/zh/function.sort.php) - 对数组排序
* [uasort](http://php.p2hp.com/manual/zh/function.uasort.php) - 使用用户定义的比较函数对数组进行排序并维护索引关联
* [uksort](http://php.p2hp.com/manual/zh/function.uksort.php) - 使用用户定义的比较函数按键对数组进行排序
* [usort](http://php.p2hp.com/manual/zh/function.usort.php) - 使用用户定义的比较函数按值对数组进行排序

:::
::: card 字符串

* [addcslashes](http://php.p2hp.com/manual/zh/function.addcslashes.php) - 使用C样式的斜杠引用字符串
* [addslashes](http://php.p2hp.com/manual/zh/function.addslashes.php) - 用斜杠引用字符串
* [bin2hex](http://php.p2hp.com/manual/zh/function.bin2hex.php) - 将二进制数据转换为十六进制表示
* [chop](http://php.p2hp.com/manual/zh/function.chop.php) - rtrim的别名
* [chr](http://php.p2hp.com/manual/zh/function.chr.php) - 从数字生成单字节字符串
* [chunk_split](http://php.p2hp.com/manual/zh/function.chunk-split.php) - 将字符串拆分为较小的块
* [convert_cyr_string](http://php.p2hp.com/manual/zh/function.convert-cyr-string.php) - 从一个西里尔字符集转换为另一个字符集
* [convert_uudecode](http://php.p2hp.com/manual/zh/function.convert-uudecode.php) - 解码一个uuencoded字符串
* [convert_uuencode](http://php.p2hp.com/manual/zh/function.convert-uuencode.php) - Uuencode一个字符串
* [count_chars](http://php.p2hp.com/manual/zh/function.count-chars.php) - 返回有关字符串中使用的字符的信息
* [crc32](http://php.p2hp.com/manual/zh/function.crc32.php) - 计算字符串的crc32多项式
* [crypt](http://php.p2hp.com/manual/zh/function.crypt.php) - 单向字符串哈希
* [echo](http://php.p2hp.com/manual/zh/function.echo.php) - 输出一个或多个字符串
* [explode](http://php.p2hp.com/manual/zh/function.explode.php) - 按字符串拆分字符串
* [fprintf](http://php.p2hp.com/manual/zh/function.fprintf.php) - 将格式化的字符串写入流
* [get_html_translation_table](http://php.p2hp.com/manual/zh/function.get-html-translation-table.php) - 

返回htmlspecialchars和htmlentities使用的转换表

* [hebrev](http://php.p2hp.com/manual/zh/function.hebrev.php) - 将逻辑希伯来文本转换为可视文本
* [hebrevc](http://php.p2hp.com/manual/zh/function.hebrevc.php) - 使用换行符转换逻辑希伯来语文本到可视文本
* [hex2bin](http://php.p2hp.com/manual/zh/function.hex2bin.php) - 对十六进制编码的二进制字符串进行解码
* [html_entity_decode](http://php.p2hp.com/manual/zh/function.html-entity-decode.php) - 将HTML实体转换为相应的字符
* [htmlentities](http://php.p2hp.com/manual/zh/function.htmlentities.php) - 将所有适用的字符转换为HTML实体
* [htmlspecialchars_decode](http://php.p2hp.com/manual/zh/function.htmlspecialchars-decode.php) - 将特殊HTML实体转换回字符
* [htmlspecialchars](http://php.p2hp.com/manual/zh/function.htmlspecialchars.php) - 将特殊字符转换为HTML实体
* [implode](http://php.p2hp.com/manual/zh/function.implode.php) - 使用字符串连接数组元素
* [join](http://php.p2hp.com/manual/zh/function.join.php) - implode的别名
* [lcfirst](http://php.p2hp.com/manual/zh/function.lcfirst.php) - 将字符串的第一个字符设为小写
* [levenshtein](http://php.p2hp.com/manual/zh/function.levenshtein.php) - 计算两个弦之间的Levenshtein距离
* [localeconv](http://php.p2hp.com/manual/zh/function.localeconv.php) - 获取数字格式信息
* [ltrim删除](http://php.p2hp.com/manual/zh/function.ltrim.php) - 从字符串的开头空格(或其他字符)
* [md5_file](http://php.p2hp.com/manual/zh/function.md5-file.php) - 计算给定文件的md5哈希值
* [md5](http://php.p2hp.com/manual/zh/function.md5.php) - 计算字符串的md5哈希值
* [metaphone](http://php.p2hp.com/manual/zh/function.metaphone.php) - 计算字符串的metaphone密钥
* [money_format](http://php.p2hp.com/manual/zh/function.money-format.php) - 将数字格式化为货币字符串
* [nl_langinfo](http://php.p2hp.com/manual/zh/function.nl-langinfo.php) - 查询语言和区域设置信息
* [nl2br](http://php.p2hp.com/manual/zh/function.nl2br.php) - 在字符串中的所有换行符之前插入HTML换行符
* [number_format](http://php.p2hp.com/manual/zh/function.number-format.php) - 格式化分组为千的数字
* [ord](http://php.p2hp.com/manual/zh/function.ord.php) - 将字符串的第一个字节转换为0到255之间的值
* [parse_str](http://php.p2hp.com/manual/zh/function.parse-str.php) - 将字符串解析为变量
* [print](http://php.p2hp.com/manual/zh/function.print.php) - 输出一个字符串
* [printf](http://php.p2hp.com/manual/zh/function.printf.php) - 输出格式化的字符串
* [quoted_printable_decode](http://php.p2hp.com/manual/zh/function.quoted-printable-decode.php) - 将带引号的可打印字符串转换为8位字符串
* [quoted_printable_encode](http://php.p2hp.com/manual/zh/function.quoted-printable-encode.php) - 将8位字符串转换为带引号的可打印字符串
* [quotemeta](http://php.p2hp.com/manual/zh/function.quotemeta.php) - 引用元字符
* [rtrim删除](http://php.p2hp.com/manual/zh/function.rtrim.php) - 从字符串末尾空格(或其他字符)
* [setlocale](http://php.p2hp.com/manual/zh/function.setlocale.php) - 设置区域设置信息
* [sha1_file](http://php.p2hp.com/manual/zh/function.sha1-file.php) - 计算文件的sha1哈希值
* [sha1](http://php.p2hp.com/manual/zh/function.sha1.php) - 计算字符串的sha1哈希值
* [similar_text](http://php.p2hp.com/manual/zh/function.similar-text.php) - 计算两个字符串之间的相似性
* [soundex](http://php.p2hp.com/manual/zh/function.soundex.php) - 计算字符串的soundex键
* [sprintf](http://php.p2hp.com/manual/zh/function.sprintf.php) - 返回格式化的字符串
* [sscanf](http://php.p2hp.com/manual/zh/function.sscanf.php) - 根据格式从字符串中解析输入
* [str_getcsv](http://php.p2hp.com/manual/zh/function.str-getcsv.php) - 将CSV字符串解析为数组
* [str_ireplace](http://php.p2hp.com/manual/zh/function.str-ireplace.php) - str_replace的不区分大小写的版本
* [str_pad](http://php.p2hp.com/manual/zh/function.str-pad.php) - 使用另一个字符串将字符串填充到某个长度
* [str_repeat](http://php.p2hp.com/manual/zh/function.str-repeat.php) - 重复一个字符串
* [str_replace](http://php.p2hp.com/manual/zh/function.str-replace.php) - 用替换字符串替换所有出现的搜索字符串
* [str_rot13](http://php.p2hp.com/manual/zh/function.str-rot13.php) - 对字符串执行rot13转换
* [str_shuffle](http://php.p2hp.com/manual/zh/function.str-shuffle.php) - 随机调整字符串
* [str_split](http://php.p2hp.com/manual/zh/function.str-split.php) - 将字符串转换为数组
* [str_word_count](http://php.p2hp.com/manual/zh/function.str-word-count.php) - 返回有关字符串中使用的单词的信息
* [strcasecmp](http://php.p2hp.com/manual/zh/function.strcasecmp.php) - 二进制安全不区分大小写的字符串比较
* [strchr](http://php.p2hp.com/manual/zh/function.strchr.php) - strstr的别名
* [strcmp](http://php.p2hp.com/manual/zh/function.strcmp.php) - 二进制安全字符串比较
* [strcoll](http://php.p2hp.com/manual/zh/function.strcoll.php) - 基于区域的字符串比较
* [strcspn](http://php.p2hp.com/manual/zh/function.strcspn.php) - 查找不匹配掩码的初始段的长度
* [strip_tags删除](http://php.p2hp.com/manual/zh/function.strip-tags.php) - 从字符串中

HTML和PHP标记

* [stripcslashes](http://php.p2hp.com/manual/zh/function.stripcslashes.php) - 使用addcslashes引用的un-quote字符串
* [stripos](http://php.p2hp.com/manual/zh/function.stripos.php) - 查找字符串中第一次出现不区分大小写的子字符串的位置
* [stripslashes取消](http://php.p2hp.com/manual/zh/function.stripslashes.php) - 引用带引号的字符串
* [stristr](http://php.p2hp.com/manual/zh/function.stristr.php) - 不区分大小写的strstr
* [strlen](http://php.p2hp.com/manual/zh/function.strlen.php) - 获取字符串长度
* [strnatcasecmp](http://php.p2hp.com/manual/zh/function.strnatcasecmp.php) - 使用“自然顺序”算法进行不区分大小写的字符串比较
* [strnatcmp](http://php.p2hp.com/manual/zh/function.strnatcmp.php) - 使用“自然顺序”算法进行字符串比较
* [strncasecmp](http://php.p2hp.com/manual/zh/function.strncasecmp.php) - 前n个字符的二进制安全不区分大小写的字符串比较
* [strncmp](http://php.p2hp.com/manual/zh/function.strncmp.php) - 前n个字符的二进制安全字符串比较
* [strpbrk](http://php.p2hp.com/manual/zh/function.strpbrk.php) - 在字符串中搜索任何一组字符
* [strpos](http://php.p2hp.com/manual/zh/function.strpos.php) - 查找字符串中第一次出现子字符串的位置
* [strrchr](http://php.p2hp.com/manual/zh/function.strrchr.php) - 查找字符串中最后一个字符
* [strrev](http://php.p2hp.com/manual/zh/function.strrev.php) - 反转一个字符串
* [strripos](http://php.p2hp.com/manual/zh/function.strripos.php) - 查找字符串中最后一个不区分大小写的子字符串的位置
* [strrpos](http://php.p2hp.com/manual/zh/function.strrpos.php) - 查找字符串中最后一次出现的子字符串的位置
* [strspn](http://php.p2hp.com/manual/zh/function.strspn.php) - 查找字符串的初始段的长度，该字符串完全由给定掩码中包含的字符组成
* [strstr](http://php.p2hp.com/manual/zh/function.strstr.php) - 查找字符串的第一个匹配项
* [strtok](http://php.p2hp.com/manual/zh/function.strtok.php) - Tokenize字符串
* [strtolower](http://php.p2hp.com/manual/zh/function.strtolower.php) - 将字符串设为小写
* [strtoupper](http://php.p2hp.com/manual/zh/function.strtoupper.php) - 将字符串设为大写
* [strtr](http://php.p2hp.com/manual/zh/function.strtr.php) - 翻译字符或替换子字符串
* [substr_compare](http://php.p2hp.com/manual/zh/function.substr-compare.php) - 从偏移量到最大长度字符的两个字符串的二进制安全比较
* [substr_count](http://php.p2hp.com/manual/zh/function.substr-count.php) - 计算子字符串出现次数
* [substr_replace](http://php.p2hp.com/manual/zh/function.substr-replace.php) - 替换字符串的一部分内的文本
* [substr](http://php.p2hp.com/manual/zh/function.substr.php) - 返回字符串的一部分
* [trim](http://php.p2hp.com/manual/zh/function.trim.php) - 从字符串的开头和结尾去除空格(或其他字符)
* [ucfirst](http://php.p2hp.com/manual/zh/function.ucfirst.php) - 将字符串的第一个字符设为大写
* [ucwords](http://php.p2hp.com/manual/zh/function.ucwords.php) - 大写字符串中每个单词的第一个字符
* [vfprintf](http://php.p2hp.com/manual/zh/function.vfprintf.php) - 将格式化的字符串写入流
* [vprintf](http://php.p2hp.com/manual/zh/function.vprintf.php) - 输出格式化的字符串
* [vsprintf](http://php.p2hp.com/manual/zh/function.vsprintf.php) - 返回格式化的字符串
* [wordwrap](http://php.p2hp.com/manual/zh/function.wordwrap.php) - 将字符串包含给给定数量的字符

:::
::: card 多字节字符串

* [mb_check_encoding](http://php.p2hp.com/manual/zh/function.mb-check-encoding.php) - 检查字符串是否对指定的编码有效
* [mb_chr](http://php.p2hp.com/manual/zh/function.mb-chr.php) - 获取特定角色
* [mb_convert_case](http://php.p2hp.com/manual/zh/function.mb-convert-case.php) - 对字符串执行大小写折叠
* [mb_convert_encoding](http://php.p2hp.com/manual/zh/function.mb-convert-encoding.php) - 转换字符编码
* [mb_convert_kana换成](http://php.p2hp.com/manual/zh/function.mb-convert-kana.php) - 将“假名” 另一个(“zen-kaku”，“han-kaku”等)
* [mb_convert_variables](http://php.p2hp.com/manual/zh/function.mb-convert-variables.php) - 转换变量中的字符代码
* [mb_decode_mimeheader](http://php.p2hp.com/manual/zh/function.mb-decode-mimeheader.php) - 解码MIME头字段中的字符串
* [mb_decode_numericentity](http://php.p2hp.com/manual/zh/function.mb-decode-numericentity.php) - 解码对字符的HTML数字字符串引用
* [mb_detect_encoding](http://php.p2hp.com/manual/zh/function.mb-detect-encoding.php) - 检测字符编码
* [mb_detect_order](http://php.p2hp.com/manual/zh/function.mb-detect-order.php) - 设置/获取字符编码检测顺序
* [mb_encode_mimeheader](http://php.p2hp.com/manual/zh/function.mb-encode-mimeheader.php) - 为MIME标头编码字符串
* [mb_encode_numericentity](http://php.p2hp.com/manual/zh/function.mb-encode-numericentity.php) - 将字符编码为HTML数字字符串引用
* [mb_encoding_aliases](http://php.p2hp.com/manual/zh/function.mb-encoding-aliases.php) - 获取已知编码类型的别名
* [mb_ereg_match](http://php.p2hp.com/manual/zh/function.mb-ereg-match.php) - 多字节字符串的正则表达式匹配
* [mb_ereg_replace_callback](http://php.p2hp.com/manual/zh/function.mb-ereg-replace-callback.php) - 执行正则表达式搜索并使用回调替换多字节支持
* [mb_ereg_replace](http://php.p2hp.com/manual/zh/function.mb-ereg-replace.php) - 用多字节支持替换正则表达式
* [mb_ereg_search_getpos](http://php.p2hp.com/manual/zh/function.mb-ereg-search-getpos.php) - 返回下一个正则表达式匹配的起始点
* [mb_ereg_search_getregs](http://php.p2hp.com/manual/zh/function.mb-ereg-search-getregs.php) - 从最后一个多字节正则表达式匹配中检索结果
* [mb_ereg_search_init](http://php.p2hp.com/manual/zh/function.mb-ereg-search-init.php) - 多字节正则表达式匹配的设置字符串和正则表达式
* [mb_ereg_search_pos](http://php.p2hp.com/manual/zh/function.mb-ereg-search-pos.php) - 返回预定义多字节字符串的多字节正则表达式的匹配部分的位置和长度
* [mb_ereg_search_regs](http://php.p2hp.com/manual/zh/function.mb-ereg-search-regs.php) - 返回多字节正则表达式的匹配部分
* [mb_ereg_search_setpos](http://php.p2hp.com/manual/zh/function.mb-ereg-search-setpos.php) - 设置下一个正则表达式匹配的起始点
* [mb_ereg_search](http://php.p2hp.com/manual/zh/function.mb-ereg-search.php) - 用于预定义多字节字符串的多字节正则表达式匹配
* [mb_ereg](http://php.p2hp.com/manual/zh/function.mb-ereg.php) - 正则表达式与多字节支持匹配
* [mb_eregi_replace](http://php.p2hp.com/manual/zh/function.mb-eregi-replace.php) - 用多字节支持替换正则表达式忽略大小写
* [mb_eregi](http://php.p2hp.com/manual/zh/function.mb-eregi.php) - 正则表达式匹配忽略具有多字节支持的大小写
* [mb_get_info](http://php.p2hp.com/manual/zh/function.mb-get-info.php) - 获取mbstring的内部设置
* [mb_http_input](http://php.p2hp.com/manual/zh/function.mb-http-input.php) - 检测HTTP输入字符编码
* [mb_http_output](http://php.p2hp.com/manual/zh/function.mb-http-output.php) - 设置/获取HTTP输出字符编码
* [mb_internal_encoding](http://php.p2hp.com/manual/zh/function.mb-internal-encoding.php) - 设置/获取内部字符编码
* [mb_language](http://php.p2hp.com/manual/zh/function.mb-language.php) - 设置/获取当前语言
* [mb_list_encodings](http://php.p2hp.com/manual/zh/function.mb-list-encodings.php) - 返回所有支持的编码的数组
* [mb_ord](http://php.p2hp.com/manual/zh/function.mb-ord.php) - 获取角色的代码点
* [mb_output_handler](http://php.p2hp.com/manual/zh/function.mb-output-handler.php) - 回调函数转换输出缓冲区中的字符编码
* [mb_parse_str](http://php.p2hp.com/manual/zh/function.mb-parse-str.php) - 解析GET/POST/COOKIE数据并设置全局变量
* [mb_preferred_mime_name](http://php.p2hp.com/manual/zh/function.mb-preferred-mime-name.php) - 获取MIME字符集字符串
* [mb_regex_encoding](http://php.p2hp.com/manual/zh/function.mb-regex-encoding.php) - 为多字节正则表达式设置/获取字符编码
* [mb_regex_set_options](http://php.p2hp.com/manual/zh/function.mb-regex-set-options.php) - 设置/获取mbregex函数的默认选项
* [mb_scrub](http://php.p2hp.com/manual/zh/function.mb-scrub.php) - 说明
* [mb_send_mail](http://php.p2hp.com/manual/zh/function.mb-send-mail.php) - 发送编码邮件
* [mb_split](http://php.p2hp.com/manual/zh/function.mb-split.php) - 使用正则表达式拆分多字节字符串
* [mb_strcut](http://php.p2hp.com/manual/zh/function.mb-strcut.php) - 获取字符串的一部分
* [mb_strimwidth](http://php.p2hp.com/manual/zh/function.mb-strimwidth.php) - 获取具有指定宽度的截断字符串
* [mb_stripos](http://php.p2hp.com/manual/zh/function.mb-stripos.php) - 查找字符串中第一次出现的位置，不区分大小写
* [mb_stristr](http://php.p2hp.com/manual/zh/function.mb-stristr.php) - 在另一个字符串中查找第一次出现的字符串，不区分大小写
* [mb_strlen](http://php.p2hp.com/manual/zh/function.mb-strlen.php) - 获取字符串长度
* [mb_strpos](http://php.p2hp.com/manual/zh/function.mb-strpos.php) - 查找字符串中第一次出现字符串的位置
* [mb_strrchr](http://php.p2hp.com/manual/zh/function.mb-strrchr.php) - 查找另一个字符串中字符的最后一次出现
* [mb_strrichr](http://php.p2hp.com/manual/zh/function.mb-strrichr.php) - 在另一个字符串中查找字符串中最后一个出现的字符串，不区分大小写
* [mb_strripos](http://php.p2hp.com/manual/zh/function.mb-strripos.php) - 查找字符串最后一次出现的位置，不区分大小写
* [mb_strrpos](http://php.p2hp.com/manual/zh/function.mb-strrpos.php) - 查找字符串中最后一次出现的字符串的位置
* [mb_strstr](http://php.p2hp.com/manual/zh/function.mb-strstr.php) - 查找另一个字符串中的第一个字符串
* [mb_strtolower](http://php.p2hp.com/manual/zh/function.mb-strtolower.php) - 将字符串设为小写
* [mb_strtoupper](http://php.p2hp.com/manual/zh/function.mb-strtoupper.php) - 将字符串设为大写
* [mb_strwidth](http://php.p2hp.com/manual/zh/function.mb-strwidth.php) - 返回字符串的宽度
* [mb_substitute_character](http://php.p2hp.com/manual/zh/function.mb-substitute-character.php) - 设置/获取替换字符
* [mb_substr_count](http://php.p2hp.com/manual/zh/function.mb-substr-count.php) - 计算子字符串出现次数
* [mb_substr](http://php.p2hp.com/manual/zh/function.mb-substr.php) - 获取字符串的一部分

:::
::: card 变量处理

* [boolval](http://php.p2hp.com/manual/zh/function.boolval.php) - 获取变量的布尔值
* [debug_zval_dump](http://php.p2hp.com/manual/zh/function.debug-zval-dump.php) - 将内部zend值的字符串表示转储为输出
* [doublevalfloatval的](http://php.p2hp.com/manual/zh/function.doubleval.php) - 别名
* [empty](http://php.p2hp.com/manual/zh/function.empty.php) - 确定变量是否为空
* [floatval](http://php.p2hp.com/manual/zh/function.floatval.php) - 获取变量的浮点值
* [get_defined_vars](http://php.p2hp.com/manual/zh/function.get-defined-vars.php) - 返回所有已定义变量的数组
* [get_resource_type](http://php.p2hp.com/manual/zh/function.get-resource-type.php) - 返回资源类型
* [gettype](http://php.p2hp.com/manual/zh/function.gettype.php) - 获取变量的类型
* [import_request_variables](http://php.p2hp.com/manual/zh/function.import-request-variables.php) - 将GET/POST /

Cookie变量导入全局范围

* [intval](http://php.p2hp.com/manual/zh/function.intval.php) - 获取变量的整数值
* [is_array](http://php.p2hp.com/manual/zh/function.is-array.php) - 查找变量是否为数组
* [is_bool](http://php.p2hp.com/manual/zh/function.is-bool.php) - 查找变量是否为布尔值
* [is_callable](http://php.p2hp.com/manual/zh/function.is-callable.php) - 验证变量的内容是否可以作为函数调用
* [is_countable](http://php.p2hp.com/manual/zh/function.is-countable.php) - 验证变量的内容是否为可数值
* [is_double](http://php.p2hp.com/manual/zh/function.is-double.php) - is_float的别名
* [is_float](http://php.p2hp.com/manual/zh/function.is-float.php) - 查找变量的类型是否为float
* [is_int](http://php.p2hp.com/manual/zh/function.is-int.php) - 查找变量的类型是否为整数
* [is_integeris_int的](http://php.p2hp.com/manual/zh/function.is-integer.php) - 别名
* [is_iterable](http://php.p2hp.com/manual/zh/function.is-iterable.php) - 验证变量的内容是否为可迭代值
* [is_longis_int的](http://php.p2hp.com/manual/zh/function.is-long.php) - 别名
* [is_null](http://php.p2hp.com/manual/zh/function.is-null.php) - 查找变量是否为NULL
* [is_numeric](http://php.p2hp.com/manual/zh/function.is-numeric.php) - 查找变量是数字还是数字字符串
* [is_object](http://php.p2hp.com/manual/zh/function.is-object.php) - 查找变量是否为对象
* [is_real](http://php.p2hp.com/manual/zh/function.is-real.php) - is_float的别名
* [is_resource](http://php.p2hp.com/manual/zh/function.is-resource.php) - 查找变量是否为资源
* [is_scalar](http://php.p2hp.com/manual/zh/function.is-scalar.php) - 查找变量是否为标量
* [is_string](http://php.p2hp.com/manual/zh/function.is-string.php) - 查找变量的类型是否为字符串
* [isset](http://php.p2hp.com/manual/zh/function.isset.php) - 确定变量是否已声明且不同于NULL
* [print_r](http://php.p2hp.com/manual/zh/function.print-r.php) - 打印有关变量的可读信息
* [serialize](http://php.p2hp.com/manual/zh/function.serialize.php) - 生成值的可存储表示
* [settype](http://php.p2hp.com/manual/zh/function.settype.php) - 设置变量的类型
* [strval](http://php.p2hp.com/manual/zh/function.strval.php) - 获取变量的字符串值
* [unserialize](http://php.p2hp.com/manual/zh/function.unserialize.php) - 从存储的表示形式创建PHP值
* [unset](http://php.p2hp.com/manual/zh/function.unset.php) - 取消设置给定变量
* [var_dump](http://php.p2hp.com/manual/zh/function.var-dump.php) - 转储有关变量的信息
* [var_export](http://php.p2hp.com/manual/zh/function.var-export.php) - 输出或返回变量的可解析字符串表示形式

:::
::: card 文件系统

* [basename](http://php.p2hp.com/manual/zh/function.basename.php) - 返回路径的尾随名称组件
* [chgrp](http://php.p2hp.com/manual/zh/function.chgrp.php) - 更改文件组
* [chmod](http://php.p2hp.com/manual/zh/function.chmod.php) - 更改文件模式
* [chown](http://php.p2hp.com/manual/zh/function.chown.php) - 更改文件所有者
* [clearstatcache](http://php.p2hp.com/manual/zh/function.clearstatcache.php) - 清除文件状态缓存
* [copy](http://php.p2hp.com/manual/zh/function.copy.php) - 复制文件
* [delete](http://php.p2hp.com/manual/zh/function.delete.php) - 请参阅取消链接或取消设置
* [dirname](http://php.p2hp.com/manual/zh/function.dirname.php) - 返回父目录的路径
* [disk_free_space](http://php.p2hp.com/manual/zh/function.disk-free-space.php) - 返回文件系统或磁盘分区上的可用空间
* [disk_total_space](http://php.p2hp.com/manual/zh/function.disk-total-space.php) - 返回文件系统或磁盘分区的总大小
* [diskfreespacedisk_free_space的](http://php.p2hp.com/manual/zh/function.diskfreespace.php) - 别名
* [fclose](http://php.p2hp.com/manual/zh/function.fclose.php) - 关闭一个打开的文件指针
* [feof](http://php.p2hp.com/manual/zh/function.feof.php) - 测试文件指针上的文件结尾
* [fflush](http://php.p2hp.com/manual/zh/function.fflush.php) - 将输出刷新到文件
* [fgetc](http://php.p2hp.com/manual/zh/function.fgetc.php) - 从文件指针获取字符
* [fgetcsv](http://php.p2hp.com/manual/zh/function.fgetcsv.php) - 从文件指针获取行并解析CSV字段
* [fgets](http://php.p2hp.com/manual/zh/function.fgets.php) - 从文件指针获取行
* [fgetss](http://php.p2hp.com/manual/zh/function.fgetss.php) - 从文件指针获取行并删除HTML标记
* [file_exists](http://php.p2hp.com/manual/zh/function.file-exists.php) - 检查文件或目录是否存在
* [file_get_contents](http://php.p2hp.com/manual/zh/function.file-get-contents.php) - 将整个文件读入字符串
* [file_put_contents写入](http://php.p2hp.com/manual/zh/function.file-put-contents.php) - 将数据文件
* [file](http://php.p2hp.com/manual/zh/function.file.php) - 将整个文件读入数组
* [fileatime](http://php.p2hp.com/manual/zh/function.fileatime.php) - 获取文件的最后访问时间
* [filectime](http://php.p2hp.com/manual/zh/function.filectime.php) - 获取文件的inode更改时间
* [filegroup](http://php.p2hp.com/manual/zh/function.filegroup.php) - 获取文件组
* [fileinode](http://php.p2hp.com/manual/zh/function.fileinode.php) - 获取文件inode
* [filemtime](http://php.p2hp.com/manual/zh/function.filemtime.php) - 获取文件修改时间
* [fileowner](http://php.p2hp.com/manual/zh/function.fileowner.php) - 获取文件所有者
* [fileperms](http://php.p2hp.com/manual/zh/function.fileperms.php) - 获取文件权限
* [filesize](http://php.p2hp.com/manual/zh/function.filesize.php) - 获取文件大小
* [filetype](http://php.p2hp.com/manual/zh/function.filetype.php) - 获取文件类型
* [flock](http://php.p2hp.com/manual/zh/function.flock.php) - 便携式咨询文件锁定
* [fnmatch](http://php.p2hp.com/manual/zh/function.fnmatch.php) - 将文件名与模式匹配
* [fopen](http://php.p2hp.com/manual/zh/function.fopen.php) - 打开文件或URL
* [fpassthru](http://php.p2hp.com/manual/zh/function.fpassthru.php) - 输出文件指针上的所有剩余数据
* [fputcsv](http://php.p2hp.com/manual/zh/function.fputcsv.php) - 将行格式化为CSV并写入文件指针
* [fputs](http://php.p2hp.com/manual/zh/function.fputs.php) - fwrite的别名
* [fread](http://php.p2hp.com/manual/zh/function.fread.php) - 二进制安全文件读取
* [fscanf](http://php.p2hp.com/manual/zh/function.fscanf.php) - 根据格式从文件中解析输入
* [fseek](http://php.p2hp.com/manual/zh/function.fseek.php) - 寻找文件指针
* [fstat](http://php.p2hp.com/manual/zh/function.fstat.php) - 使用打开的文件指针获取有关文件的信息
* [ftell](http://php.p2hp.com/manual/zh/function.ftell.php) - 返回文件读/写指针的当前位置
* [ftruncate](http://php.p2hp.com/manual/zh/function.ftruncate.php) - 将文件截断为给定长度
* [fwrite](http://php.p2hp.com/manual/zh/function.fwrite.php) - 二进制安全文件写入
* [glob](http://php.p2hp.com/manual/zh/function.glob.php) - 查找与模式匹配的路径名
* [is_dir](http://php.p2hp.com/manual/zh/function.is-dir.php) - 判断文件名是否是目录
* [is_executable](http://php.p2hp.com/manual/zh/function.is-executable.php) - 判断文件名是否可执行
* [is_file](http://php.p2hp.com/manual/zh/function.is-file.php) - 判断文件名是否是常规文件
* [is_link](http://php.p2hp.com/manual/zh/function.is-link.php) - 判断文件名是否为符号链接
* [is_readable](http://php.p2hp.com/manual/zh/function.is-readable.php) - 判断文件是否存在且可读
* [is_uploaded_file](http://php.p2hp.com/manual/zh/function.is-uploaded-file.php) - 判断文件是否通过HTTP POST上传
* [is_writable](http://php.p2hp.com/manual/zh/function.is-writable.php) - 判断文件名是否可写
* [is_writeable](http://php.p2hp.com/manual/zh/function.is-writeable.php) - is_writable的别名
* [lchgrp](http://php.p2hp.com/manual/zh/function.lchgrp.php) - 更改符号链接的组所有权
* [lchown](http://php.p2hp.com/manual/zh/function.lchown.php) - 更改符号链接的用户所有权
* [link](http://php.p2hp.com/manual/zh/function.link.php) - 创建硬链接
* [linkinfo](http://php.p2hp.com/manual/zh/function.linkinfo.php) - 获取有关链接的信息
* [lstat](http://php.p2hp.com/manual/zh/function.lstat.php) - 提供有关文件或符号链接的信息
* [mkdir](http://php.p2hp.com/manual/zh/function.mkdir.php) - 制作目录
* [move_uploaded_file](http://php.p2hp.com/manual/zh/function.move-uploaded-file.php) - 将上传的文件移动到新位置
* [parse_ini_file](http://php.p2hp.com/manual/zh/function.parse-ini-file.php) - 解析配置文件
* [parse_ini_string](http://php.p2hp.com/manual/zh/function.parse-ini-string.php) - 解析配置字符串
* [pathinfo](http://php.p2hp.com/manual/zh/function.pathinfo.php) - 返回有关文件路径的信息
* [pclose](http://php.p2hp.com/manual/zh/function.pclose.php) - 关闭进程文件指针
* [popen](http://php.p2hp.com/manual/zh/function.popen.php) - 打开进程文件指针
* [readfile](http://php.p2hp.com/manual/zh/function.readfile.php) - 输出文件
* [readlink](http://php.p2hp.com/manual/zh/function.readlink.php) - 返回符号链接的目标
* [realpath_cache_get](http://php.p2hp.com/manual/zh/function.realpath-cache-get.php) - 获取realpath缓存条目
* [realpath_cache_size](http://php.p2hp.com/manual/zh/function.realpath-cache-size.php) - 获取实际路径缓存大小
* [realpath](http://php.p2hp.com/manual/zh/function.realpath.php) - 返回规范化的绝对​​路径名
* [rename](http://php.p2hp.com/manual/zh/function.rename.php) - 重命名文件或目录
* [rewind回](http://php.p2hp.com/manual/zh/function.rewind.php) - 倒文件指针的位置
* [rmdir](http://php.p2hp.com/manual/zh/function.rmdir.php) - 删除目录
* [set_file_buffer](http://php.p2hp.com/manual/zh/function.set-file-buffer.php) - stream_set_write_buffer的别名
* [stat](http://php.p2hp.com/manual/zh/function.stat.php) - 提供有关文件的信息
* [symlink](http://php.p2hp.com/manual/zh/function.symlink.php) - 创建符号链接
* [tempnam](http://php.p2hp.com/manual/zh/function.tempnam.php) - 使用唯一文件名创建文件
* [tmpfile](http://php.p2hp.com/manual/zh/function.tmpfile.php) - 创建临时文件
* [touch](http://php.p2hp.com/manual/zh/function.touch.php) - 设置文件的访问和修改时间
* [umask](http://php.p2hp.com/manual/zh/function.umask.php) - 更改当前的umask
* [unlink](http://php.p2hp.com/manual/zh/function.unlink.php) - 删除文件

:::
::: card 目录处理

* [chdir](http://php.p2hp.com/manual/zh/function.chdir.php) - 更改目录
* [chroot](http://php.p2hp.com/manual/zh/function.chroot.php) - 更改根目录
* [closedir](http://php.p2hp.com/manual/zh/function.closedir.php) - 关闭目录句柄
* [dir](http://php.p2hp.com/manual/zh/function.dir.php) - 返回Directory类的实例
* [getcwd](http://php.p2hp.com/manual/zh/function.getcwd.php) - 获取当前工作目录
* [opendir](http://php.p2hp.com/manual/zh/function.opendir.php) - 打开目录句柄
* [readdir](http://php.p2hp.com/manual/zh/function.readdir.php) - 从目录句柄读取条目
* [rewinddir](http://php.p2hp.com/manual/zh/function.rewinddir.php) - 回滚目录句柄
* [scandir](http://php.p2hp.com/manual/zh/function.scandir.php) - 列出指定路径中的文件和目录

:::
::: card 数学

* [abs](http://php.p2hp.com/manual/zh/function.abs.php) - 绝对值
* [acos](http://php.p2hp.com/manual/zh/function.acos.php) - Arc cosine
* [acosh](http://php.p2hp.com/manual/zh/function.acosh.php) - 反双曲余弦
* [asin](http://php.p2hp.com/manual/zh/function.asin.php) - Arc正弦
* [asinh](http://php.p2hp.com/manual/zh/function.asinh.php) - 反双曲正弦
* [atan2](http://php.p2hp.com/manual/zh/function.atan2.php) - 两个变量的反正切
* [atan](http://php.p2hp.com/manual/zh/function.atan.php) - 反正切
* [atanh](http://php.p2hp.com/manual/zh/function.atanh.php) - 反双曲正切
* [base_convert](http://php.p2hp.com/manual/zh/function.base-convert.php) - 在任意碱基之间转换数字
* [bindec](http://php.p2hp.com/manual/zh/function.bindec.php) - 二进制到十进制
* [ceil](http://php.p2hp.com/manual/zh/function.ceil.php) - 圆形分数
* [cos](http://php.p2hp.com/manual/zh/function.cos.php) - 余弦
* [cosh](http://php.p2hp.com/manual/zh/function.cosh.php) - 双曲余弦
* [decbin](http://php.p2hp.com/manual/zh/function.decbin.php) - 十进制到二进制
* [dechex](http://php.p2hp.com/manual/zh/function.dechex.php) - 十进制到十六进制
* [decoct](http://php.p2hp.com/manual/zh/function.decoct.php) - 十进制到八进制
* [deg2rad](http://php.p2hp.com/manual/zh/function.deg2rad.php) - 将度数转换为弧度当量
* [exp](http://php.p2hp.com/manual/zh/function.exp.php) - 计算e的指数
* [expm1](http://php.p2hp.com/manual/zh/function.expm1.php) - 返回exp(number) - 1，即使number的值接近于零，也以精确的方式计算
* [floor](http://php.p2hp.com/manual/zh/function.floor.php) - 圆形分数下降
* [fmod](http://php.p2hp.com/manual/zh/function.fmod.php) - 返回参数除法的浮点余数(modulo)
* [getrandmax](http://php.p2hp.com/manual/zh/function.getrandmax.php) - 显示最大可能的随机值
* [hexdec](http://php.p2hp.com/manual/zh/function.hexdec.php) - 十六进制到十进制
* [hypot](http://php.p2hp.com/manual/zh/function.hypot.php) - 计算直角三角形的斜边长度
* [intdiv](http://php.p2hp.com/manual/zh/function.intdiv.php) - 整数分部
* [is_finite](http://php.p2hp.com/manual/zh/function.is-finite.php) - 查找值是否为合法有限数
* [is_infinite](http://php.p2hp.com/manual/zh/function.is-infinite.php) - 查找值是否为无限
* [is_nan](http://php.p2hp.com/manual/zh/function.is-nan.php) - 查找值是否不是数字
* [lcg_value](http://php.p2hp.com/manual/zh/function.lcg-value.php) - 组合线性同余生成器
* [log10](http://php.p2hp.com/manual/zh/function.log10.php) - Base-10对数
* [log1p](http://php.p2hp.com/manual/zh/function.log1p.php) - 返回log(1 + number)，即使number的值接近于零，也以精确的方式计算
* [log](http://php.p2hp.com/manual/zh/function.log.php) - 自然对数
* [max](http://php.p2hp.com/manual/zh/function.max.php) - 找到最高价值
* [min](http://php.p2hp.com/manual/zh/function.min.php) - 找到最低价值
* [mt_getrandmax](http://php.p2hp.com/manual/zh/function.mt-getrandmax.php) - 显示最大可能的随机值
* [mt_rand](http://php.p2hp.com/manual/zh/function.mt-rand.php) - 通过Mersenne Twister随机数生成器生成随机值
* [mt_srand](http://php.p2hp.com/manual/zh/function.mt-srand.php) - 播种Mersenne Twister随机数发生器
* [octdec](http://php.p2hp.com/manual/zh/function.octdec.php) - 八进制到十进制
* [pi](http://php.p2hp.com/manual/zh/function.pi.php) - 获得pi的价值
* [pow](http://php.p2hp.com/manual/zh/function.pow.php) - 指数表达式
* [rad2deg](http://php.p2hp.com/manual/zh/function.rad2deg.php) - 将弧度数转换为以度为单位的等效数
* [rand](http://php.p2hp.com/manual/zh/function.rand.php) - 生成随机整数
* [round圆形](http://php.p2hp.com/manual/zh/function.round.php) - 浮动
* [sin](http://php.p2hp.com/manual/zh/function.sin.php) - 正弦
* [sinh](http://php.p2hp.com/manual/zh/function.sinh.php) - 双曲正弦
* [sqrt](http://php.p2hp.com/manual/zh/function.sqrt.php) - 平方根
* [srand](http://php.p2hp.com/manual/zh/function.srand.php) - 播种随机数生成器
* [tan](http://php.p2hp.com/manual/zh/function.tan.php) - Tangent
* [tanh](http://php.p2hp.com/manual/zh/function.tanh.php) - 双曲正切

:::
::: card 类和对象

* [__autoload](http://php.p2hp.com/manual/zh/function.autoload.php) - 尝试加载未定义的类
* [call_user_method_array](http://php.p2hp.com/manual/zh/function.call-user-method-array.php) - 调用带有参数数组的用户方法
* [call_user_method](http://php.p2hp.com/manual/zh/function.call-user-method.php) - 在特定对象上调用用户方法
* [class_alias](http://php.p2hp.com/manual/zh/function.class-alias.php) - 为类创建别名
* [class_exists](http://php.p2hp.com/manual/zh/function.class-exists.php) - 检查是否已定义类
* [get_called_class](http://php.p2hp.com/manual/zh/function.get-called-class.php) - “Late Static Binding”类名
* [get_class_methods](http://php.p2hp.com/manual/zh/function.get-class-methods.php) - 获取类方法的名称
* [get_class_vars](http://php.p2hp.com/manual/zh/function.get-class-vars.php) - 获取类的默认属性
* [get_class](http://php.p2hp.com/manual/zh/function.get-class.php) - 返回对象类的名称
* [get_declared_classes](http://php.p2hp.com/manual/zh/function.get-declared-classes.php) - 返回具有已定义类名称的数组
* [get_declared_interfaces](http://php.p2hp.com/manual/zh/function.get-declared-interfaces.php) - 返回所有声明的接口的数组
* [get_declared_traits](http://php.p2hp.com/manual/zh/function.get-declared-traits.php) - 返回所有声明的特征的数组
* [get_object_vars](http://php.p2hp.com/manual/zh/function.get-object-vars.php) - 获取给定对象的属性
* [get_parent_class](http://php.p2hp.com/manual/zh/function.get-parent-class.php) - 检索对象或类的父类名
* [interface_exists](http://php.p2hp.com/manual/zh/function.interface-exists.php) - 检查接口是否已定义
* [is_a](http://php.p2hp.com/manual/zh/function.is-a.php) - 检查对象是否属于此类，或者将此类作为其父类之一
* [is_subclass_of](http://php.p2hp.com/manual/zh/function.is-subclass-of.php) - 检查对象是否将此类作为其父类之一或实现它
* [method_exists](http://php.p2hp.com/manual/zh/function.method-exists.php) - 检查类方法是否存在
* [property_exists](http://php.p2hp.com/manual/zh/function.property-exists.php) - 检查对象或类是否具有属性
* [trait_exists](http://php.p2hp.com/manual/zh/function.trait-exists.php) - 检查特征是否存在

:::
::: card 字符类型检测Ctype

* [ctype_alnum](http://php.p2hp.com/manual/zh/function.ctype-alnum.php) - 检查字母数字字符
* [ctype_alpha](http://php.p2hp.com/manual/zh/function.ctype-alpha.php) - 检查字母字符
* [ctype_cntrl](http://php.p2hp.com/manual/zh/function.ctype-cntrl.php) - 检查控制字符
* [ctype_digit](http://php.p2hp.com/manual/zh/function.ctype-digit.php) - 检查数字字符
* [ctype_graph](http://php.p2hp.com/manual/zh/function.ctype-graph.php) - 检查除空格外的任何可打印字符
* [ctype_lower](http://php.p2hp.com/manual/zh/function.ctype-lower.php) - 检查小写字符
* [ctype_print](http://php.p2hp.com/manual/zh/function.ctype-print.php) - 检查可打印字符
* [ctype_punct](http://php.p2hp.com/manual/zh/function.ctype-punct.php) - 检查任何非空白字符或字母数字字符的可打印字符
* [ctype_space](http://php.p2hp.com/manual/zh/function.ctype-space.php) - 检查空格字符
* [ctype_upper](http://php.p2hp.com/manual/zh/function.ctype-upper.php) - 检查大写字符
* [ctype_xdigit](http://php.p2hp.com/manual/zh/function.ctype-xdigit.php) - 检查表示十六进制数字的字符

:::
::: card 日期和时间

* [checkdate](http://php.p2hp.com/manual/zh/function.checkdate.php) - 验证公历日期
* [date_add](http://php.p2hp.com/manual/zh/function.date-add.php) - DateTime::add的别名
* [date_create_from_format](http://php.p2hp.com/manual/zh/function.date-create-from-format.php) - DateTime::createFromFormat的别名
* [date_create_immutable_from_format](http://php.p2hp.com/manual/zh/function.date-create-immutable-from-format.php) - 

DateTimeImmutable::createFromFormat的别名

* [date_create_immutable](http://php.p2hp.com/manual/zh/function.date-create-immutable.php) -  DateTimeImmutable::__construct的别名
* [date_create](http://php.p2hp.com/manual/zh/function.date-create.php) -  DateTime::__construct的别名
* [date_date_set](http://php.p2hp.com/manual/zh/function.date-date-set.php) - DateTime::setDate的别名
* [date_default_timezone_get](http://php.p2hp.com/manual/zh/function.date-default-timezone-get.php) - 

获取脚本中所有日期/时间函数使用的默认时区

* [date_default_timezone_set](http://php.p2hp.com/manual/zh/function.date-default-timezone-set.php) - 

设置脚本中所有日期/时间函数使用的默认时区

* [date_diff](http://php.p2hp.com/manual/zh/function.date-diff.php) - DateTime::diff的别名
* [date_format](http://php.p2hp.com/manual/zh/function.date-format.php) - DateTime::format的别名
* [date_get_last_errors](http://php.p2hp.com/manual/zh/function.date-get-last-errors.php) - DateTime::getLastErrors的别名
* [date_interval_create_from_date_string](http://php.p2hp.com/manual/zh/function.date-interval-create-from-date-string.php) - DateInterval::createFromDateString的别名
* [date_interval_format](http://php.p2hp.com/manual/zh/function.date-interval-format.php) - DateInterval::format的别名
* [date_isodate_set](http://php.p2hp.com/manual/zh/function.date-isodate-set.php) - DateTime::setISODate的别名
* [date_modify](http://php.p2hp.com/manual/zh/function.date-modify.php) - DateTime::modify的别名
* [date_offset_get](http://php.p2hp.com/manual/zh/function.date-offset-get.php) - DateTime::getOffset的别名
* [date_parse_from_format](http://php.p2hp.com/manual/zh/function.date-parse-from-format.php) - 获取有关根据指定格式格式化的给定日期的信息
* [date_parse](http://php.p2hp.com/manual/zh/function.date-parse.php) - 返回关联数组，其中包含有关给定日期的详细信息
* [date_sub](http://php.p2hp.com/manual/zh/function.date-sub.php) - DateTime::sub的别名
* [date_sun_info](http://php.p2hp.com/manual/zh/function.date-sun-info.php) - 返回一个数组，其中包含有关日落/日出和黄昏开始/结束的信息
* [date_sunrise](http://php.p2hp.com/manual/zh/function.date-sunrise.php) - 返回给定日期和位置的日出时间
* [date_sunset](http://php.p2hp.com/manual/zh/function.date-sunset.php) - 返回给定日期和位置的日落时间
* [date_time_set](http://php.p2hp.com/manual/zh/function.date-time-set.php) - DateTime::setTime的别名
* [date_timestamp_get](http://php.p2hp.com/manual/zh/function.date-timestamp-get.php) - DateTime::getTimestamp的别名
* [date_timestamp_set](http://php.p2hp.com/manual/zh/function.date-timestamp-set.php) - DateTime::setTimestamp的别名
* [date_timezone_get](http://php.p2hp.com/manual/zh/function.date-timezone-get.php) - DateTime::getTimezone的别名
* [date_timezone_set](http://php.p2hp.com/manual/zh/function.date-timezone-set.php) - DateTime::setTimezone的别名
* [date](http://php.p2hp.com/manual/zh/function.date.php) - 格式化本地时间/日期
* [getdate](http://php.p2hp.com/manual/zh/function.getdate.php) - 获取日期/时间信息
* [gettimeofday](http://php.p2hp.com/manual/zh/function.gettimeofday.php) - 获取当前时间
* [gmdate](http://php.p2hp.com/manual/zh/function.gmdate.php) - 格式化GMT/UTC日期/时间
* [gmmktime](http://php.p2hp.com/manual/zh/function.gmmktime.php) - 获取GMT日期的Unix时间戳
* [gmstrftime](http://php.p2hp.com/manual/zh/function.gmstrftime.php) - 根据区域设置格式化GMT/UTC时间/日期
* [idate](http://php.p2hp.com/manual/zh/function.idate.php) - 将本地时间/日期格式化为整数
* [localtime](http://php.p2hp.com/manual/zh/function.localtime.php) - 获取当地时间
* [microtime](http://php.p2hp.com/manual/zh/function.microtime.php) - 返回当前的Unix时间戳，以微秒为单位
* [mktime](http://php.p2hp.com/manual/zh/function.mktime.php) - 获取日期的Unix时间戳
* [strftime](http://php.p2hp.com/manual/zh/function.strftime.php) - 根据区域设置格式化本地时间/日期
* [strptime](http://php.p2hp.com/manual/zh/function.strptime.php) - 解析strftime生成的时间/日期
* [strtotime](http://php.p2hp.com/manual/zh/function.strtotime.php) - 将任何英文文本日期时间描述解析为Unix时间戳
* [time](http://php.p2hp.com/manual/zh/function.time.php) - 返回当前的Unix时间戳
* [timezone_abbreviations_list](http://php.p2hp.com/manual/zh/function.timezone-abbreviations-list.php) - DateTimeZone::listAbbreviations的别名
* [timezone_identifiers_list](http://php.p2hp.com/manual/zh/function.timezone-identifiers-list.php) - DateTimeZone::listIdentifiers的别名
* [timezone_location_get](http://php.p2hp.com/manual/zh/function.timezone-location-get.php) - DateTimeZone::getLocation的别名
* [timezone_name_from_abbr](http://php.p2hp.com/manual/zh/function.timezone-name-from-abbr.php) - 从缩写返回时区名称
* [timezone_name_get](http://php.p2hp.com/manual/zh/function.timezone-name-get.php) - DateTimeZone::getName的别名
* [timezone_offset_get](http://php.p2hp.com/manual/zh/function.timezone-offset-get.php) - DateTimeZone::getOffset的别名
* [timezone_open](http://php.p2hp.com/manual/zh/function.timezone-open.php) - DateTimeZone::__construct的别名
* [timezone_transitions_get](http://php.p2hp.com/manual/zh/function.timezone-transitions-get.php) - DateTimeZone::getTransitions的别名
* [timezone_version_gettimezonedb](http://php.p2hp.com/manual/zh/function.timezone-version-get.php) - 获取的版本

:::
::: card CURL

* [curl_close](http://php.p2hp.com/manual/zh/function.curl-close.php) - 关闭cURL会话
* [curl_copy_handle](http://php.p2hp.com/manual/zh/function.curl-copy-handle.php) - 复制cURL句柄及其所有首选项
* [curl_errno](http://php.p2hp.com/manual/zh/function.curl-errno.php) - 返回最后一个错误号
* [curl_error](http://php.p2hp.com/manual/zh/function.curl-error.php) - 返回包含当前会话的最后一个错误的字符串
* [curl_escape](http://php.p2hp.com/manual/zh/function.curl-escape.php) - URL对给定字符串进行编码
* [curl_exec](http://php.p2hp.com/manual/zh/function.curl-exec.php) - 执行cURL会话
* [curl_file_create](http://php.p2hp.com/manual/zh/function.curl-file-create.php) - 创建CURLFile对象
* [curl_getinfo](http://php.p2hp.com/manual/zh/function.curl-getinfo.php) - 获取有关特定转移的信息
* [curl_init](http://php.p2hp.com/manual/zh/function.curl-init.php) - 初始化cURL会话
* [curl_multi_add_handle](http://php.p2hp.com/manual/zh/function.curl-multi-add-handle.php) - 将正常的cURL句柄添加到cURL多句柄
* [curl_multi_close](http://php.p2hp.com/manual/zh/function.curl-multi-close.php) - 关闭一组cURL句柄
* [curl_multi_errno](http://php.p2hp.com/manual/zh/function.curl-multi-errno.php) - 返回最后一个多卷曲错误号
* [curl_multi_exec](http://php.p2hp.com/manual/zh/function.curl-multi-exec.php) - 运行当前cURL句柄的子连接
* [curl_multi_getcontent](http://php.p2hp.com/manual/zh/function.curl-multi-getcontent.php) - 如果设置了CURLOPT_RETURNTRANSFER，则返回cURL句柄的内容
* [curl_multi_info_read](http://php.p2hp.com/manual/zh/function.curl-multi-info-read.php) - 获取有关当前传输的信息
* [curl_multi_init](http://php.p2hp.com/manual/zh/function.curl-multi-init.php) - 返回一个新的cURL多句柄
* [curl_multi_remove_handle](http://php.p2hp.com/manual/zh/function.curl-multi-remove-handle.php) - 从一组cURL句柄中删除多个句柄
* [curl_multi_select](http://php.p2hp.com/manual/zh/function.curl-multi-select.php) - 等待任何curl_multi连接上的活动
* [curl_multi_setopt](http://php.p2hp.com/manual/zh/function.curl-multi-setopt.php) - 为cURL多句柄设置一个选项
* [curl_multi_strerror](http://php.p2hp.com/manual/zh/function.curl-multi-strerror.php) - 返回描述错误代码的字符串
* [curl_pause](http://php.p2hp.com/manual/zh/function.curl-pause.php) - 暂停和取消暂停连接
* [curl_reset](http://php.p2hp.com/manual/zh/function.curl-reset.php) - 重置libcurl会话句柄的所有选项
* [curl_setopt_array](http://php.p2hp.com/manual/zh/function.curl-setopt-array.php) - 为cURL传输设置多个选项
* [curl_setopt](http://php.p2hp.com/manual/zh/function.curl-setopt.php) - 设置cURL传输的选项
* [curl_share_close](http://php.p2hp.com/manual/zh/function.curl-share-close.php) - 关闭cURL共享句柄
* [curl_share_errno](http://php.p2hp.com/manual/zh/function.curl-share-errno.php) - 返回最后一个共享卷曲错误号
* [curl_share_init](http://php.p2hp.com/manual/zh/function.curl-share-init.php) - 初始化cURL共享句柄
* [curl_share_setopt](http://php.p2hp.com/manual/zh/function.curl-share-setopt.php) - 为cURL共享句柄设置一个选项
* [curl_share_strerror](http://php.p2hp.com/manual/zh/function.curl-share-strerror.php) - 返回描述给定错误代码的字符串
* [curl_strerror](http://php.p2hp.com/manual/zh/function.curl-strerror.php) - 返回描述给定错误代码的字符串
* [curl_unescape](http://php.p2hp.com/manual/zh/function.curl-unescape.php) - 解码给定的URL编码字符串
* [curl_version](http://php.p2hp.com/manual/zh/function.curl-version.php) - 获取cURL版本信息

:::
::: card 过滤器Filter

* [filter_has_var](http://php.p2hp.com/manual/zh/function.filter-has-var.php) - 检查指定类型的变量是否存在
* [filter_id](http://php.p2hp.com/manual/zh/function.filter-id.php) - 返回属于命名过滤器的过滤器ID
* [filter_input_array](http://php.p2hp.com/manual/zh/function.filter-input-array.php) - 获取外部变量并可选择过滤它们
* [filter_input](http://php.p2hp.com/manual/zh/function.filter-input.php) - 按名称获取特定的外部变量，并可选择对其进行过滤
* [filter_list](http://php.p2hp.com/manual/zh/function.filter-list.php) - 返回所有支持的过滤器的列表
* [filter_var_array](http://php.p2hp.com/manual/zh/function.filter-var-array.php) - 获取多个变量并可选择过滤它们
* [filter_var](http://php.p2hp.com/manual/zh/function.filter-var.php) - 使用指定的过滤器过滤变量

:::
::: card 函数处理

* [call_user_func_array](http://php.p2hp.com/manual/zh/function.call-user-func-array.php) - 使用参数数组调用回调
* [call_user_func](http://php.p2hp.com/manual/zh/function.call-user-func.php) - 调用第一个参数给出的回调
* [create_function](http://php.p2hp.com/manual/zh/function.create-function.php) - 创建一个匿名(lambda样式)函数
* [forward_static_call_array](http://php.p2hp.com/manual/zh/function.forward-static-call-array.php) - 调用静态方法并将参数作为数组传递
* [forward_static_call](http://php.p2hp.com/manual/zh/function.forward-static-call.php) - 调用静态方法
* [func_get_arg](http://php.p2hp.com/manual/zh/function.func-get-arg.php) - 从参数列表中返回一个项目
* [func_get_args](http://php.p2hp.com/manual/zh/function.func-get-args.php) - 返回包含函数参数列表的数组
* [func_num_args](http://php.p2hp.com/manual/zh/function.func-num-args.php) - 返回传递给函数的参数个数
* [function_exists](http://php.p2hp.com/manual/zh/function.function-exists.php) - 如果已定义给定函数，则返回TRUE
* [get_defined_functions](http://php.p2hp.com/manual/zh/function.get-defined-functions.php) - 返回所有已定义函数的数组
* [register_shutdown_function](http://php.p2hp.com/manual/zh/function.register-shutdown-function.php) - 注册一个在关机时执行的函数
* [register_tick_function](http://php.p2hp.com/manual/zh/function.register-tick-function.php) - 在每个tick上注册一个执行函数
* [unregister_tick_function](http://php.p2hp.com/manual/zh/function.unregister-tick-function.php) - 取消注册每个tick上执行的函数

:::
::: card 正则处理PCRE 

* [preg_filter](http://php.p2hp.com/manual/zh/function.preg-filter.php) - 执行正则表达式搜索和替换
* [preg_grep](http://php.p2hp.com/manual/zh/function.preg-grep.php) - 返回与模式匹配的数组条目
* [preg_last_error](http://php.p2hp.com/manual/zh/function.preg-last-error.php) - 返回上一次PCRE正则表达式执行的错误代码
* [preg_match_all](http://php.p2hp.com/manual/zh/function.preg-match-all.php) - 执行全局正则表达式匹配
* [preg_match](http://php.p2hp.com/manual/zh/function.preg-match.php) - 执行正则表达式匹配
* [preg_quote](http://php.p2hp.com/manual/zh/function.preg-quote.php) - 引用正则表达式字符
* [preg_replace_callback_array](http://php.p2hp.com/manual/zh/function.preg-replace-callback-array.php) - 执行正则表达式搜索并使用回调替换
* [preg_replace_callback](http://php.p2hp.com/manual/zh/function.preg-replace-callback.php) - 执行正则表达式搜索并使用回调替换
* [preg_replace](http://php.p2hp.com/manual/zh/function.preg-replace.php) - 执行正则表达式搜索和替换
* [preg_split](http://php.p2hp.com/manual/zh/function.preg-split.php) - 按正则表达式拆分字符串

:::
::: card 网络Network

* [checkdnsrr](http://php.p2hp.com/manual/zh/function.checkdnsrr.php) - 检查与给定Internet主机名或IP地址对应的DNS记录
* [closelog](http://php.p2hp.com/manual/zh/function.closelog.php) - 关闭与系统记录器的连接
* [define_syslog_variables](http://php.p2hp.com/manual/zh/function.define-syslog-variables.php) - 初始化所有与syslog相关的变量
* [dns_check_record](http://php.p2hp.com/manual/zh/function.dns-check-record.php) - checkdnsrr的别名
* [dns_get_mxgetmxrr的](http://php.p2hp.com/manual/zh/function.dns-get-mx.php) - 别名
* [dns_get_record](http://php.p2hp.com/manual/zh/function.dns-get-record.php) - 获取与主机名关联的DNS资源记录
* [fsockopen](http://php.p2hp.com/manual/zh/function.fsockopen.php) - 打开Internet或Unix域套接字连接
* [gethostbyaddr](http://php.p2hp.com/manual/zh/function.gethostbyaddr.php) - 获取与给定IP地址对应的Internet主机名
* [gethostbyname](http://php.p2hp.com/manual/zh/function.gethostbyname.php) - 获取与给定Internet主机名对应的IPv4地址
* [gethostbynamel](http://php.p2hp.com/manual/zh/function.gethostbynamel.php) - 获取与给定Internet主机名对应的IPv4地址列表
* [gethostname](http://php.p2hp.com/manual/zh/function.gethostname.php) - 获取主机名
* [getmxrr](http://php.p2hp.com/manual/zh/function.getmxrr.php) - 获取与给定Internet主机名对应的MX记录
* [getprotobyname](http://php.p2hp.com/manual/zh/function.getprotobyname.php) - 获取与协议名称关联的协议号
* [getprotobynumber](http://php.p2hp.com/manual/zh/function.getprotobynumber.php) - 获取与协议号关联的协议名称
* [getservbyname](http://php.p2hp.com/manual/zh/function.getservbyname.php) - 获取与Internet服务和协议关联的端口号
* [getservbyport](http://php.p2hp.com/manual/zh/function.getservbyport.php) - 获取与端口和协议对应的Internet服务
* [header_register_callback](http://php.p2hp.com/manual/zh/function.header-register-callback.php) - 调用头函数
* [header_remove](http://php.p2hp.com/manual/zh/function.header-remove.php) - 删除以前设置的标头
* [header](http://php.p2hp.com/manual/zh/function.header.php) - 发送原始HTTP标头
* [headers_list](http://php.p2hp.com/manual/zh/function.headers-list.php) - 返回已发送(或准备发送)的响应头列表
* [headers_sent](http://php.p2hp.com/manual/zh/function.headers-sent.php) - 检查标头是否或已经发送到何处
* [http_response_code](http://php.p2hp.com/manual/zh/function.http-response-code.php) - 获取或设置HTTP响应代码
* [inet_ntop](http://php.p2hp.com/manual/zh/function.inet-ntop.php) - 将打包的Internet地址转换为人类可读的表示形式
* [inet_pton](http://php.p2hp.com/manual/zh/function.inet-pton.php) - 将人类可读的IP地址转换为其压缩的in_addr表示形式
* [ip2long](http://php.p2hp.com/manual/zh/function.ip2long.php) - 将包含(IPv4)Internet协议虚线地址的字符串转换为长整数
* [long2ip](http://php.p2hp.com/manual/zh/function.long2ip.php) - 将长整数地址转换为(IPv4)Internet标准点分格式的字符串
* [openlog](http://php.p2hp.com/manual/zh/function.openlog.php) - 打开与系统记录器的连接
* [pfsockopen](http://php.p2hp.com/manual/zh/function.pfsockopen.php) - 打开持久Internet或Unix域套接字连接
* [setcookie](http://php.p2hp.com/manual/zh/function.setcookie.php) - 发送cookie
* [setrawcookie](http://php.p2hp.com/manual/zh/function.setrawcookie.php) - 发送cookie而不用urlencoding cookie值
* [socket_get_status](http://php.p2hp.com/manual/zh/function.socket-get-status.php) - stream_get_meta_data的别名
* [socket_set_blocking](http://php.p2hp.com/manual/zh/function.socket-set-blocking.php) - stream_set_blocking的别名
* [socket_set_timeout](http://php.p2hp.com/manual/zh/function.socket-set-timeout.php) - stream_set_timeout的别名
* [syslog](http://php.p2hp.com/manual/zh/function.syslog.php) - 生成系统日志消息

:::
::: card 程序执行

* [escapeshellarg](http://php.p2hp.com/manual/zh/function.escapeshellarg.php) - 转义一个字符串以用作shell参数
* [escapeshellcmd](http://php.p2hp.com/manual/zh/function.escapeshellcmd.php) - 转义shell元字符
* [exec](http://php.p2hp.com/manual/zh/function.exec.php) - 执行外部程序
* [passthru](http://php.p2hp.com/manual/zh/function.passthru.php) - 执行外部程序并显示原始输出
* [proc_closeproc_open](http://php.p2hp.com/manual/zh/function.proc-close.php) - 关闭打开的进程并返回该进程的退出代码
* [proc_get_status](http://php.p2hp.com/manual/zh/function.proc-get-status.php) - 获取有关proc_open打开的进程的信息
* [proc_nice](http://php.p2hp.com/manual/zh/function.proc-nice.php) - 更改当前进程的优先级
* [proc_open](http://php.p2hp.com/manual/zh/function.proc-open.php) - 执行命令并打开输入/输出的文件指针
* [proc_terminate](http://php.p2hp.com/manual/zh/function.proc-terminate.php) - 终止proc_open打开的进程
* [shell_exec](http://php.p2hp.com/manual/zh/function.shell-exec.php) - 通过shell执行命令并将完整输出作为字符串返回
* [system](http://php.p2hp.com/manual/zh/function.system.php) - 执行外部程序并显示输出

:::
::: card PHP选项和信息

* [assert_options](http://php.p2hp.com/manual/zh/function.assert-options.php) - 设置/获取各种断言标志
* [assert](http://php.p2hp.com/manual/zh/function.assert.php) - 检查断言是否为FALSE
* [cli_get_process_title](http://php.p2hp.com/manual/zh/function.cli-get-process-title.php) - 返回当前进程标题
* [cli_set_process_title](http://php.p2hp.com/manual/zh/function.cli-set-process-title.php) - 设置进程标题
* [dl](http://php.p2hp.com/manual/zh/function.dl.php) - 在运行时加载PHP扩展
* [extension_loaded](http://php.p2hp.com/manual/zh/function.extension-loaded.php) - 找出是否加载了扩展名
* [gc_collect_cycles](http://php.p2hp.com/manual/zh/function.gc-collect-cycles.php) - 强制收集任何现有的垃圾循环
* [gc_disable](http://php.p2hp.com/manual/zh/function.gc-disable.php) - 取消激活循环引用收集器
* [gc_enable](http://php.p2hp.com/manual/zh/function.gc-enable.php) - 激活循环引用收集器
* [gc_enabled](http://php.p2hp.com/manual/zh/function.gc-enabled.php) - 返回循环引用收集器的状态
* [gc_mem_caches](http://php.p2hp.com/manual/zh/function.gc-mem-caches.php) - 回收Zend Engine内存管理器使用的内存
* [gc_status](http://php.p2hp.com/manual/zh/function.gc-status.php) - 获取有关垃圾收集器的信息
* [get_cfg_var](http://php.p2hp.com/manual/zh/function.get-cfg-var.php) - 获取PHP配置选项的值
* [get_current_user](http://php.p2hp.com/manual/zh/function.get-current-user.php) - 获取当前PHP脚本的所有者的名称
* [get_defined_constants](http://php.p2hp.com/manual/zh/function.get-defined-constants.php) - 返回一个关联数组，其中包含所有常量及其值的名称
* [get_extension_funcs](http://php.p2hp.com/manual/zh/function.get-extension-funcs.php) - 返回一个包含模块函数名称的数组
* [get_include_path](http://php.p2hp.com/manual/zh/function.get-include-path.php) - 获取当前的include_path配置选项
* [get_included_files](http://php.p2hp.com/manual/zh/function.get-included-files.php) - 返回包含所包含或必需文件名称的数组
* [get_loaded_extensions](http://php.p2hp.com/manual/zh/function.get-loaded-extensions.php) - 返回一个数组，其中包含已编译和加载的所有模块的名称
* [get_magic_quotes_gpc](http://php.p2hp.com/manual/zh/function.get-magic-quotes-gpc.php) - 获取magic_quotes_gpc的当前配置设置
* [get_magic_quotes_runtime](http://php.p2hp.com/manual/zh/function.get-magic-quotes-runtime.php) - 获取magic_quotes_runtime的当前活动配置设置
* [get_required_files](http://php.p2hp.com/manual/zh/function.get-required-files.php) - get_included_files的别名
* [get_resources](http://php.p2hp.com/manual/zh/function.get-resources.php) - 返回活动资源
* [getenv](http://php.p2hp.com/manual/zh/function.getenv.php) - 获取环境变量的值
* [getlastmod](http://php.p2hp.com/manual/zh/function.getlastmod.php) - 获取最后一页修改的时间
* [getmygid](http://php.p2hp.com/manual/zh/function.getmygid.php) - 获取PHP脚本所有者的GID
* [getmyinode](http://php.p2hp.com/manual/zh/function.getmyinode.php) - 获取当前脚本的inode
* [getmypid](http://php.p2hp.com/manual/zh/function.getmypid.php) - 获取PHP的进程ID
* [getmyuid](http://php.p2hp.com/manual/zh/function.getmyuid.php) - 获取PHP脚本所有者的UID
* [getopt](http://php.p2hp.com/manual/zh/function.getopt.php) - 从命令行参数列表中获取选项
* [getrusage](http://php.p2hp.com/manual/zh/function.getrusage.php) - 获取当前资源使用情况
* [ini_alter](http://php.p2hp.com/manual/zh/function.ini-alter.php) - ini_set的别名
* [ini_get_all](http://php.p2hp.com/manual/zh/function.ini-get-all.php) - 获取所有配置选项
* [ini_get](http://php.p2hp.com/manual/zh/function.ini-get.php) - 获取配置选项的值
* [ini_restore](http://php.p2hp.com/manual/zh/function.ini-restore.php) - 恢复配置选项的值
* [ini_set](http://php.p2hp.com/manual/zh/function.ini-set.php) - 设置配置选项的值
* [magic_quotes_runtime](http://php.p2hp.com/manual/zh/function.magic-quotes-runtime.php) - set_magic_quotes_runtime的别名
* [main](http://php.p2hp.com/manual/zh/function.main.php) - Dummy for main
* [memory_get_peak_usage](http://php.p2hp.com/manual/zh/function.memory-get-peak-usage.php) - 返回PHP分配的内存峰值
* [memory_get_usage](http://php.p2hp.com/manual/zh/function.memory-get-usage.php) - 返回分配给PHP的内存量
* [php_ini_loaded_file](http://php.p2hp.com/manual/zh/function.php-ini-loaded-file.php) - 检索加载的php.ini文件的路径
* [php_ini_scanned_files](http://php.p2hp.com/manual/zh/function.php-ini-scanned-files.php) - 返回从附加的ini目录解析的.ini文件列表
* [php_logo_guid](http://php.p2hp.com/manual/zh/function.php-logo-guid.php) - 获取徽标guid
* [php_sapi_name](http://php.p2hp.com/manual/zh/function.php-sapi-name.php) - 返回Web服务器和PHP之间的接口类型
* [php_uname](http://php.p2hp.com/manual/zh/function.php-uname.php) - 返回有关运行PHP的操作系统的信息
* [phpcredits](http://php.p2hp.com/manual/zh/function.phpcredits.php) - 打印PHP的学分
* [phpinfo](http://php.p2hp.com/manual/zh/function.phpinfo.php) - 输出有关PHP配置的信息
* [phpversion](http://php.p2hp.com/manual/zh/function.phpversion.php) - 获取当前的PHP版本
* [putenv](http://php.p2hp.com/manual/zh/function.putenv.php) - 设置环境变量的值
* [restore_include_path](http://php.p2hp.com/manual/zh/function.restore-include-path.php) - 恢复include_path配置选项的值
* [set_include_path](http://php.p2hp.com/manual/zh/function.set-include-path.php) - 设置include_path配置选项
* [set_magic_quotes_runtime](http://php.p2hp.com/manual/zh/function.set-magic-quotes-runtime.php) - 

设置magic_quotes_runtime的当前活动配置设置

* [set_time_limit](http://php.p2hp.com/manual/zh/function.set-time-limit.php) - 限制最长执行时间
* [sys_get_temp_dir](http://php.p2hp.com/manual/zh/function.sys-get-temp-dir.php) - 返回用于临时文件的目录路径
* [version_compare](http://php.p2hp.com/manual/zh/function.version-compare.php) - 比较两个“PHP标准化”版本号字符串
* [zend_logo_guid](http://php.p2hp.com/manual/zh/function.zend-logo-guid.php) - 获取Zend guid
* [zend_thread_id](http://php.p2hp.com/manual/zh/function.zend-thread-id.php) - 返回当前线程的唯一标识符
* [zend_version](http://php.p2hp.com/manual/zh/function.zend-version.php) - 获取当前Zend引擎的版本

:::
::: card 错误处理

* [debug_backtrace](http://php.p2hp.com/manual/zh/function.debug-backtrace.php) - 生成回溯
* [debug_print_backtrace](http://php.p2hp.com/manual/zh/function.debug-print-backtrace.php) - 打印回溯
* [error_clear_last](http://php.p2hp.com/manual/zh/function.error-clear-last.php) - 清除最近的错误
* [error_get_last](http://php.p2hp.com/manual/zh/function.error-get-last.php) - 获取上次发生的错误
* [error_log](http://php.p2hp.com/manual/zh/function.error-log.php) - 向定义的错误处理例程发送错误消息
* [error_reporting](http://php.p2hp.com/manual/zh/function.error-reporting.php) - 设置报告的PHP错误
* [restore_error_handler](http://php.p2hp.com/manual/zh/function.restore-error-handler.php) - 恢复先前的错误处理函数
* [restore_exception_handler](http://php.p2hp.com/manual/zh/function.restore-exception-handler.php) - 恢复先前定义的异常处理函数
* [set_error_handler](http://php.p2hp.com/manual/zh/function.set-error-handler.php) - 设置用户定义的错误处理函数
* [set_exception_handler](http://php.p2hp.com/manual/zh/function.set-exception-handler.php) - 设置用户定义的异常处理函数
* [trigger_error](http://php.p2hp.com/manual/zh/function.trigger-error.php) - 生成用户级错误/警告/通知消息
* [user_error](http://php.p2hp.com/manual/zh/function.user-error.php) - trigger_error的别名

:::
::: card 输出缓冲控制

* [flush](http://php.p2hp.com/manual/zh/function.flush.php) - 刷新系统输出缓冲区
* [ob_clean](http://php.p2hp.com/manual/zh/function.ob-clean.php) - 清除(擦除)输出缓冲区
* [ob_end_clean](http://php.p2hp.com/manual/zh/function.ob-end-clean.php) - 清除(擦除)输出缓冲区并关闭输出缓冲
* [ob_end_flush](http://php.p2hp.com/manual/zh/function.ob-end-flush.php) - 刷新(发送)输出缓冲区并关闭输出缓冲
* [ob_flush](http://php.p2hp.com/manual/zh/function.ob-flush.php) - 刷新(发送)输出缓冲区
* [ob_get_clean](http://php.p2hp.com/manual/zh/function.ob-get-clean.php) - 获取当前缓冲区内容并删除当前输出缓冲区
* [ob_get_contents](http://php.p2hp.com/manual/zh/function.ob-get-contents.php) - 返回输出缓冲区的内容
* [ob_get_flush](http://php.p2hp.com/manual/zh/function.ob-get-flush.php) - 刷新输出缓冲区，将其作为字符串返回并关闭输出缓冲
* [ob_get_length](http://php.p2hp.com/manual/zh/function.ob-get-length.php) - 返回输出缓冲区的长度
* [ob_get_level](http://php.p2hp.com/manual/zh/function.ob-get-level.php) - 返回输出缓冲机制的嵌套级别
* [ob_get_status](http://php.p2hp.com/manual/zh/function.ob-get-status.php) - 获取输出缓冲区的状态
* [ob_gzhandler](http://php.p2hp.com/manual/zh/function.ob-gzhandler.php) - ob_start对gzip输出缓冲区的回调函数
* [ob_implicit_flush](http://php.p2hp.com/manual/zh/function.ob-implicit-flush.php) - 打开/关闭隐式刷新
* [ob_list_handlers](http://php.p2hp.com/manual/zh/function.ob-list-handlers.php) - 列出正在使用的所有输出处理程序
* [ob_start](http://php.p2hp.com/manual/zh/function.ob-start.php) - 打开输出缓冲
* [output_add_rewrite_var](http://php.p2hp.com/manual/zh/function.output-add-rewrite-var.php) - 添加URL重写器值
* [output_reset_rewrite_vars](http://php.p2hp.com/manual/zh/function.output-reset-rewrite-vars.php) - 重置URL重写器值

:::
::: card 密码散列算法

* [password_get_info](http://php.p2hp.com/manual/zh/function.password-get-info.php) - 返回有关给定哈希的信息
* [password_hash](http://php.p2hp.com/manual/zh/function.password-hash.php) - 创建密码哈希
* [password_needs_rehash](http://php.p2hp.com/manual/zh/function.password-needs-rehash.php) - 检查给定的哈希值是否与给定的选项匹配
* [password_verify](http://php.p2hp.com/manual/zh/function.password-verify.php) - 验证密码是否与哈希匹配

:::
::: card 会话Session

* [session_abort](http://php.p2hp.com/manual/zh/function.session-abort.php) - 放弃会话数组更改并完成会话
* [session_cache_expire](http://php.p2hp.com/manual/zh/function.session-cache-expire.php) - 返回当前缓存过期
* [session_cache_limiter](http://php.p2hp.com/manual/zh/function.session-cache-limiter.php) - 获取和/或设置当前缓存限制器
* [session_commitsession_write_close的](http://php.p2hp.com/manual/zh/function.session-commit.php) - 别名
* [session_create_id](http://php.p2hp.com/manual/zh/function.session-create-id.php) - 创建新的会话ID
* [session_decode](http://php.p2hp.com/manual/zh/function.session-decode.php) - 从会话编码的字符串中解码会话数据
* [session_destroy](http://php.p2hp.com/manual/zh/function.session-destroy.php) - 销毁注册到会话的所有数据
* [session_encode](http://php.p2hp.com/manual/zh/function.session-encode.php) - 将当前会话数据编码为会话编码字符串
* [session_gc](http://php.p2hp.com/manual/zh/function.session-gc.php) - 执行会话数据垃圾回收
* [session_get_cookie_params](http://php.p2hp.com/manual/zh/function.session-get-cookie-params.php) - 获取会话cookie参数
* [session_id](http://php.p2hp.com/manual/zh/function.session-id.php) - 获取和/或设置当前会话ID
* [session_is_registered](http://php.p2hp.com/manual/zh/function.session-is-registered.php) - 查明是否在会话中注册了全局变量
* [session_module_name](http://php.p2hp.com/manual/zh/function.session-module-name.php) - 获取和/或设置当前会话模块
* [session_name](http://php.p2hp.com/manual/zh/function.session-name.php) - 获取和/或设置当前会话名称
* [session_regenerate_id](http://php.p2hp.com/manual/zh/function.session-regenerate-id.php) - 使用新生成的会话ID更新当前会话ID
* [session_register_shutdown](http://php.p2hp.com/manual/zh/function.session-register-shutdown.php) - 会话关闭功能
* [session_register](http://php.p2hp.com/manual/zh/function.session-register.php) - 使用当前会话注册一个或多个全局变量
* [session_reset](http://php.p2hp.com/manual/zh/function.session-reset.php) - 使用原始值重新初始化会话数组
* [session_save_path](http://php.p2hp.com/manual/zh/function.session-save-path.php) - 获取和/或设置当前会话保存路径
* [session_set_cookie_params](http://php.p2hp.com/manual/zh/function.session-set-cookie-params.php) - 设置会话cookie参数
* [session_set_save_handler](http://php.p2hp.com/manual/zh/function.session-set-save-handler.php) - 设置用户级会话存储功能
* [session_start](http://php.p2hp.com/manual/zh/function.session-start.php) - 启动新会话或恢复现有会话
* [session_status](http://php.p2hp.com/manual/zh/function.session-status.php) - 返回当前会话状态
* [session_unregister](http://php.p2hp.com/manual/zh/function.session-unregister.php) - 从当前会话中取消注册全局变量
* [session_unset](http://php.p2hp.com/manual/zh/function.session-unset.php) - 释放所有会话变量
* [session_write_close](http://php.p2hp.com/manual/zh/function.session-write-close.php) - 写入会话数据和结束会话

:::
::: card JSON

* [json_decode](http://php.p2hp.com/manual/zh/function.json-decode.php) - 解码JSON字符串
* [json_encode](http://php.p2hp.com/manual/zh/function.json-encode.php) - 返回值的JSON表示形式
* [json_last_error_msg](http://php.p2hp.com/manual/zh/function.json-last-error-msg.php) - 返回最后一个json_encode()或json_decode()调用的错误字符串
* [json_last_error](http://php.p2hp.com/manual/zh/function.json-last-error.php) - 返回上次发生的错误

:::
::: card Stream

* [set_socket_blocking](http://php.p2hp.com/manual/zh/function.set-socket-blocking.php) - stream_set_blocking的别名
* [stream_bucket_append](http://php.p2hp.com/manual/zh/function.stream-bucket-append.php) - 将存储桶附加到旅
* [stream_bucket_make_writeable](http://php.p2hp.com/manual/zh/function.stream-bucket-make-writeable.php) - 从旅中返回一个桶对象进行操作
* [stream_bucket_new](http://php.p2hp.com/manual/zh/function.stream-bucket-new.php) - 创建一个用于当前流的新存储桶
* [stream_bucket_prepend](http://php.p2hp.com/manual/zh/function.stream-bucket-prepend.php) - 将存储桶前置到旅
* [stream_context_create](http://php.p2hp.com/manual/zh/function.stream-context-create.php) - 创建流上下文
* [stream_context_get_default](http://php.p2hp.com/manual/zh/function.stream-context-get-default.php) - 检索默认流上下文
* [stream_context_get_options](http://php.p2hp.com/manual/zh/function.stream-context-get-options.php) - 检索流/包装器/上下文的选项
* [stream_context_get_params](http://php.p2hp.com/manual/zh/function.stream-context-get-params.php) - 从上下文中检索参数
* [stream_context_set_default](http://php.p2hp.com/manual/zh/function.stream-context-set-default.php) - 设置默认流上下文
* [stream_context_set_option](http://php.p2hp.com/manual/zh/function.stream-context-set-option.php) - 为流/包装器/上下文设置选项
* [stream_context_set_params](http://php.p2hp.com/manual/zh/function.stream-context-set-params.php) - 设置流/包装器/上下文的参数
* [stream_copy_to_stream](http://php.p2hp.com/manual/zh/function.stream-copy-to-stream.php) - 将数据从一个流复制到另一个流
* [stream_filter_append](http://php.p2hp.com/manual/zh/function.stream-filter-append.php) - 将过滤器附加到流
* [stream_filter_prepend](http://php.p2hp.com/manual/zh/function.stream-filter-prepend.php) - 将过滤器附加到流
* [stream_filter_register](http://php.p2hp.com/manual/zh/function.stream-filter-register.php) - 注册用户定义的流过滤器
* [stream_filter_remove](http://php.p2hp.com/manual/zh/function.stream-filter-remove.php) - 从流中删除过滤器
* [stream_get_contents](http://php.p2hp.com/manual/zh/function.stream-get-contents.php) - 将流的剩余部分读入字符串
* [stream_get_filters](http://php.p2hp.com/manual/zh/function.stream-get-filters.php) - 检索已注册过滤器的列表
* [stream_get_line](http://php.p2hp.com/manual/zh/function.stream-get-line.php) - 从流资源获取直到给定分隔符的行
* [stream_get_meta_data](http://php.p2hp.com/manual/zh/function.stream-get-meta-data.php) - 从流/文件指针中检索标头/元数据
* [stream_get_transports](http://php.p2hp.com/manual/zh/function.stream-get-transports.php) - 检索已注册套接字传输的列表
* [stream_get_wrappers](http://php.p2hp.com/manual/zh/function.stream-get-wrappers.php) - 检索已注册流的列表
* [stream_is_local](http://php.p2hp.com/manual/zh/function.stream-is-local.php) - 检查流是否是本地流
* [stream_isatty](http://php.p2hp.com/manual/zh/function.stream-isatty.php) - 检查流是否为TTY
* [stream_notification_callback](http://php.p2hp.com/manual/zh/function.stream-notification-callback.php) - 通知上下文参数的回调函数
* [stream_register_wrapperstream_wrapper_register的](http://php.p2hp.com/manual/zh/function.stream-register-wrapper.php) - 别名
* [stream_resolve_include_path](http://php.p2hp.com/manual/zh/function.stream-resolve-include-path.php) - 根据包含路径解析文件名
* [stream_select](http://php.p2hp.com/manual/zh/function.stream-select.php) - 在给定的流数组上运行select()系统调用的等价物，并使用tv_sec和tv_usec指定的超时
* [stream_set_blocking](http://php.p2hp.com/manual/zh/function.stream-set-blocking.php) - 在流上设置阻塞/非阻塞模式
* [stream_set_chunk_size](http://php.p2hp.com/manual/zh/function.stream-set-chunk-size.php) - 设置流块大小
* [stream_set_read_buffer](http://php.p2hp.com/manual/zh/function.stream-set-read-buffer.php) - 在给定流上设置读取文件缓冲
* [stream_set_timeout](http://php.p2hp.com/manual/zh/function.stream-set-timeout.php) - 在流上设置超时时间
* [stream_set_write_buffer](http://php.p2hp.com/manual/zh/function.stream-set-write-buffer.php) - 设置给定流上的写文件缓冲
* [stream_socket_accept](http://php.p2hp.com/manual/zh/function.stream-socket-accept.php) - 接受stream_socket_server创建的套接字上的连接
* [stream_socket_client](http://php.p2hp.com/manual/zh/function.stream-socket-client.php) - 打开Internet或Unix域套接字连接
* [stream_socket_enable_crypto](http://php.p2hp.com/manual/zh/function.stream-socket-enable-crypto.php) - 在已连接的套接字上打开/关闭加密
* [stream_socket_get_name](http://php.p2hp.com/manual/zh/function.stream-socket-get-name.php) - 检索本地或远程套接字的名称
* [stream_socket_pair](http://php.p2hp.com/manual/zh/function.stream-socket-pair.php) - 创建一对连接的，无法区分的套接字流
* [stream_socket_recvfrom](http://php.p2hp.com/manual/zh/function.stream-socket-recvfrom.php) - 从连接或不连接的套接字接收数据
* [stream_socket_sendto](http://php.p2hp.com/manual/zh/function.stream-socket-sendto.php) - 向套接字发送消息，无论它是否已连接
* [stream_socket_server](http://php.p2hp.com/manual/zh/function.stream-socket-server.php) - 创建Internet或Unix域服务器套接字
* [stream_socket_shutdown](http://php.p2hp.com/manual/zh/function.stream-socket-shutdown.php) - 关闭全双工连接
* [stream_supports_lock](http://php.p2hp.com/manual/zh/function.stream-supports-lock.php) - 判断流是否支持锁定
* [stream_wrapper_register](http://php.p2hp.com/manual/zh/function.stream-wrapper-register.php) - 注册实现为PHP类的URL包装器
* [stream_wrapper_restore](http://php.p2hp.com/manual/zh/function.stream-wrapper-restore.php) - 恢复以前未注册的内置包装器
* [stream_wrapper_unregister](http://php.p2hp.com/manual/zh/function.stream-wrapper-unregister.php) - 取消注册URL包装器

:::
::: card SPL

* [class_implements](http://php.p2hp.com/manual/zh/function.class-implements.php) - 返回由给定类或接口实现的接口
* [class_parents](http://php.p2hp.com/manual/zh/function.class-parents.php) - 返回给定类的父类
* [class_uses](http://php.p2hp.com/manual/zh/function.class-uses.php) - 返回给定类使用的特征
* [iterator_apply](http://php.p2hp.com/manual/zh/function.iterator-apply.php) - 为迭代器中的每个元素调用一个函数
* [iterator_count迭代器中](http://php.p2hp.com/manual/zh/function.iterator-count.php) - 计算的元素
* [iterator_to_array器](http://php.p2hp.com/manual/zh/function.iterator-to-array.php) - 将迭代复制到数组中
* [spl_autoload_call](http://php.p2hp.com/manual/zh/function.spl-autoload-call.php) - 尝试所有已注册的__autoload()函数来加载请求的类
* [spl_autoload_extensions](http://php.p2hp.com/manual/zh/function.spl-autoload-extensions.php) - 注册并返回spl_autoload的默认文件扩展名
* [spl_autoload_functions](http://php.p2hp.com/manual/zh/function.spl-autoload-functions.php) - 返回所有已注册的__autoload()函数
* [spl_autoload_register](http://php.p2hp.com/manual/zh/function.spl-autoload-register.php) - 将给定函数注册为__autoload()实现
* [spl_autoload_unregister](http://php.p2hp.com/manual/zh/function.spl-autoload-unregister.php) - 取消注册给定函数作为__autoload()实现
* [spl_autoload](http://php.p2hp.com/manual/zh/function.spl-autoload.php) - ()的默认实现
* [spl_classes](http://php.p2hp.com/manual/zh/function.spl-classes.php) - 返回可用的SPL类
* [spl_object_hash](http://php.p2hp.com/manual/zh/function.spl-object-hash.php) - 返回给定对象的哈希id
* [spl_object_id](http://php.p2hp.com/manual/zh/function.spl-object-id.php) - 返回给定对象的整数对象句柄

:::
::: card BCMath

* [bcadd](http://php.p2hp.com/manual/zh/function.bcadd.php) - 添加两个任意精度数字
* [bccomp](http://php.p2hp.com/manual/zh/function.bccomp.php) - 比较两个任意精度数
* [bcdiv](http://php.p2hp.com/manual/zh/function.bcdiv.php) - 除以两个任意精度数
* [bcmod](http://php.p2hp.com/manual/zh/function.bcmod.php) - 获取任意精度数的模数
* [bcmul](http://php.p2hp.com/manual/zh/function.bcmul.php) - 将两个任意精度数相乘
* [bcpow](http://php.p2hp.com/manual/zh/function.bcpow.php) - 将任意精度数字提升到另一个
* [bcpowmod](http://php.p2hp.com/manual/zh/function.bcpowmod.php) - 将任意精度数提升到另一个，减去指定的模数
* [bcscale](http://php.p2hp.com/manual/zh/function.bcscale.php) - 为所有bc数学函数设置或获取默认缩放参数
* [bcsqrt](http://php.p2hp.com/manual/zh/function.bcsqrt.php) - 获取任意精度数的平方根
* [bcsub](http://php.p2hp.com/manual/zh/function.bcsub.php) - 从另一个中减去一个任意精度数

:::
::: card 杂项

* [connection_aborted](http://php.p2hp.com/manual/zh/function.connection-aborted.php) - 检查客户端是否已断开连接
* [connection_status](http://php.p2hp.com/manual/zh/function.connection-status.php) - 返回连接状态位域
* [constant常量](http://php.p2hp.com/manual/zh/function.constant.php) - 返回的值
* [define](http://php.p2hp.com/manual/zh/function.define.php) - 定义命名常量
* [defined](http://php.p2hp.com/manual/zh/function.defined.php) - 检查给定的命名常量是否存在
* [die](http://php.p2hp.com/manual/zh/function.die.php) - 相当于退出
* [eval](http://php.p2hp.com/manual/zh/function.eval.php) - 将字符串评估为PHP代码
* [exit](http://php.p2hp.com/manual/zh/function.exit.php) - 输出消息并终止当前脚本
* [get_browser](http://php.p2hp.com/manual/zh/function.get-browser.php) - 告诉用户的浏览器能够做什么
* [__halt_compiler](http://php.p2hp.com/manual/zh/function.halt-compiler.php) - 暂停编译器执行
* [highlight_file](http://php.p2hp.com/manual/zh/function.highlight-file.php) - 突出显示文件的语法
* [highlight_string](http://php.p2hp.com/manual/zh/function.highlight-string.php) - 突出显示字符串的语法
* [hrtime](http://php.p2hp.com/manual/zh/function.hrtime.php) - 获取系统的高分辨率时间
* [ignore_user_abort](http://php.p2hp.com/manual/zh/function.ignore-user-abort.php) - 设置客户端断开连接是否应中止脚本执行
* [pack打包](http://php.p2hp.com/manual/zh/function.pack.php) - 将数据成二进制字符串
* [php_check_syntax](http://php.p2hp.com/manual/zh/function.php-check-syntax.php) - 检查(并执行)指定文件的PHP语法
* [php_strip_whitespace](http://php.p2hp.com/manual/zh/function.php-strip-whitespace.php) - 返回带有剥离注释和空格的源代码
* [sapi_windows_cp_conv](http://php.p2hp.com/manual/zh/function.sapi-windows-cp-conv.php) - 将字符串从一个代码页转换为另一个代码页
* [sapi_windows_cp_get](http://php.p2hp.com/manual/zh/function.sapi-windows-cp-get.php) - 获取流程代码页
* [sapi_windows_cp_is_utf8](http://php.p2hp.com/manual/zh/function.sapi-windows-cp-is-utf8.php) - 指示代码页是否与UTF-8兼容
* [sapi_windows_cp_set](http://php.p2hp.com/manual/zh/function.sapi-windows-cp-set.php) - 设置进程代码页
* [sapi_windows_vt100_support](http://php.p2hp.com/manual/zh/function.sapi-windows-vt100-support.php) - 为与Windows控制台的输出缓冲区关联的指定流获取或设置VT100支持。
* [show_source](http://php.p2hp.com/manual/zh/function.show-source.php) - highlight_file的别名
* [sleep](http://php.p2hp.com/manual/zh/function.sleep.php) - 延迟执行
* [sys_getloadavg](http://php.p2hp.com/manual/zh/function.sys-getloadavg.php) - 获取系统平均负载
* [time_nanosleep](http://php.p2hp.com/manual/zh/function.time-nanosleep.php) - 延迟数秒和纳秒
* [time_sleep_until](http://php.p2hp.com/manual/zh/function.time-sleep-until.php) - 使脚本休眠直到指定的时间
* [uniqid](http://php.p2hp.com/manual/zh/function.uniqid.php) - 生成唯一ID
* [unpack解](http://php.p2hp.com/manual/zh/function.unpack.php) - 从二进制字符串中压缩数据
* [usleep](http://php.p2hp.com/manual/zh/function.usleep.php) - 以微秒为单位延迟执行

:::
::: card Hash

* [hash_algos](http://php.p2hp.com/manual/zh/function.hash-algos.php) - 返回已注册的散列算法列表
* [hash_copy](http://php.p2hp.com/manual/zh/function.hash-copy.php) - 复制散列上下文
* [hash_equals](http://php.p2hp.com/manual/zh/function.hash-equals.php) - 定时攻击安全字符串比较
* [hash_file](http://php.p2hp.com/manual/zh/function.hash-file.php) - 使用给定文件的内容生成哈希值
* [hash_final](http://php.p2hp.com/manual/zh/function.hash-final.php) - 完成增量散列并返回结果摘要
* [hash_hkdfHKDF](http://php.p2hp.com/manual/zh/function.hash-hkdf.php) - 生成提供的键输入的键派生
* [hash_hmac_algos](http://php.p2hp.com/manual/zh/function.hash-hmac-algos.php) - 返回适用于hash_hmac的已注册散列算法列表
* [hash_hmac_file](http://php.p2hp.com/manual/zh/function.hash-hmac-file.php) - 使用HMAC方法和给定文件的内容生成键控哈希值
* [hash_hmac](http://php.p2hp.com/manual/zh/function.hash-hmac.php) - 使用HMAC方法生成键控哈希值
* [hash_init](http://php.p2hp.com/manual/zh/function.hash-init.php) - 初始化增量散列上下文
* [hash_pbkdf2](http://php.p2hp.com/manual/zh/function.hash-pbkdf2.php) - 生成提供的密码的PBKDF2密钥派生
* [hash_update_file](http://php.p2hp.com/manual/zh/function.hash-update-file.php) - 将数据从文件泵入活动的哈希上下文
* [hash_update_stream中将](http://php.p2hp.com/manual/zh/function.hash-update-stream.php) - 从打开的流数据泵入活动的哈希上下文
* [hash_update](http://php.p2hp.com/manual/zh/function.hash-update.php) - 将数据泵入活动的哈希上下文
* [hash](http://php.p2hp.com/manual/zh/function.hash.php) - 生成哈希值(消息摘要)

:::
::: card PDO

* PDO - PDO类
* [PDO::beginTransaction](http://php.p2hp.com/manual/zh/pdo.begintransaction.php) - 启动事务
* [PDO::commit](http://php.p2hp.com/manual/zh/pdo.commit.php) - 提交事务
* [PDO::__ construct](http://php.p2hp.com/manual/zh/pdo.construct.php) - 创建表示与数据库的连接的PDO实例
* [PDO::errorCode](http://php.p2hp.com/manual/zh/pdo.errorcode.php) - 获取与数据库句柄上的最后一个操作关联的SQLSTATE
* [PDO::errorInfo](http://php.p2hp.com/manual/zh/pdo.errorinfo.php) - 获取与数据库句柄上的最后一个操作关联的扩展错误信息
* [PDO::exec](http://php.p2hp.com/manual/zh/pdo.exec.php) - 执行SQL语句并返回受影响的行数
* [PDO::getAttribute](http://php.p2hp.com/manual/zh/pdo.getattribute.php) - 检索数据库连接属性
* [PDO::getAvailableDrivers](http://php.p2hp.com/manual/zh/pdo.getavailabledrivers.php) - 返回可用PDO驱动程序的数组
* [PDO::inTransaction](http://php.p2hp.com/manual/zh/pdo.intransaction.php) - 检查是否在事务内部
* [PDO::lastInsertId](http://php.p2hp.com/manual/zh/pdo.lastinsertid.php) - 返回最后插入的行或序列值的ID
* [PDO::prepare](http://php.p2hp.com/manual/zh/pdo.prepare.php) - 准备要执行的语句并返回一个语句对象
* [PDO::query](http://php.p2hp.com/manual/zh/pdo.query.php) - 执行SQL语句，将结果集作为PDOStatement对象返回
* [PDO::quote](http://php.p2hp.com/manual/zh/pdo.quote.php) - 引用用于查询的字符串
* [PDO::rollBack](http://php.p2hp.com/manual/zh/pdo.rollback.php) - 回滚事务
* [PDO::setAttribute](http://php.p2hp.com/manual/zh/pdo.setattribute.php) - 设置属性
* PDOStatement - PDOStatement类
* [PDOStatement::bindColumn](http://php.p2hp.com/manual/zh/pdostatement.bindcolumn.php) - 将列绑定到PHP变量
* [PDOStatement::bindParam](http://php.p2hp.com/manual/zh/pdostatement.bindparam.php) - 将参数绑定到指定的变量名称
* [PDOStatement::bindValue](http://php.p2hp.com/manual/zh/pdostatement.bindvalue.php) - 将值绑定到参数
* [PDOStatement::closeCursor](http://php.p2hp.com/manual/zh/pdostatement.closecursor.php) - 关闭游标，使语句再次执行
* [PDOStatement::columnCount](http://php.p2hp.com/manual/zh/pdostatement.columncount.php) - 返回结果集中的列数
* [PDOStatement::debugDumpParams](http://php.p2hp.com/manual/zh/pdostatement.debugdumpparams.php) - 转储SQL准备的命令
* [PDOStatement::errorCode](http://php.p2hp.com/manual/zh/pdostatement.errorcode.php) - 获取与语句句柄上的最后一个操作关联的SQLSTATE
* [PDOStatement::errorInfo](http://php.p2hp.com/manual/zh/pdostatement.errorinfo.php) - 获取与语句句柄上的最后一个操作关联的扩展错误信息
* [PDOStatement::execute](http://php.p2hp.com/manual/zh/pdostatement.execute.php) - 执行预准备语句
* [PDOStatement::fetch](http://php.p2hp.com/manual/zh/pdostatement.fetch.php) - 从结果集中获取下一行
* [PDOStatement::fetchAll](http://php.p2hp.com/manual/zh/pdostatement.fetchall.php) - 返回包含所有结果集行的数组
* [PDOStatement::fetchColumn](http://php.p2hp.com/manual/zh/pdostatement.fetchcolumn.php) - 从结果集的下一行返回单个列
* [PDOStatement::fetchObject](http://php.p2hp.com/manual/zh/pdostatement.fetchobject.php) - 获取下一行并将其作为对象返回
* [PDOStatement::getAttribute](http://php.p2hp.com/manual/zh/pdostatement.getattribute.php) - 检索语句属性
* [PDOStatement::getColumnMeta](http://php.p2hp.com/manual/zh/pdostatement.getcolumnmeta.php) - 返回结果集中列的元数据
* [PDOStatement::nextRowset](http://php.p2hp.com/manual/zh/pdostatement.nextrowset.php) - 前进到多行集语句句柄中的下一个行集
* [PDOStatement::rowCount](http://php.p2hp.com/manual/zh/pdostatement.rowcount.php) - 返回受上一个SQL语句影响的行数
* [PDOStatement::setAttribute](http://php.p2hp.com/manual/zh/pdostatement.setattribute.php) - 设置语句属性
* [PDOStatement::setFetchMode](http://php.p2hp.com/manual/zh/pdostatement.setfetchmode.php) - 设置此语句的默认提取模式

:::
::: card MySQLi

* mysqli - mysqli类
* [mysqli::$ affected_rows](http://php.p2hp.com/manual/zh/mysqli.affected-rows.php) - (mysqli_affected_rows)获取先前MySQL操作中受影响的行数
* [mysqli::autocommit](http://php.p2hp.com/manual/zh/mysqli.autocommit.php) - (mysqli_autocommit)打开或关闭自动提交数据库修改
* [mysqli::begin_transaction](http://php.p2hp.com/manual/zh/mysqli.begin-transaction.php) - (mysqli_begin_transaction)启动一个事务
* [mysqli::change_user](http://php.p2hp.com/manual/zh/mysqli.change-user.php) - (mysqli_change_user)更改指定数据库连接的用户
* [mysqli::character_set_name](http://php.p2hp.com/manual/zh/mysqli.character-set-name.php) - (mysqli_character_set_name)返回数据库连接的默认字符集
* [mysqli::close](http://php.p2hp.com/manual/zh/mysqli.close.php) - (mysqli_close)关闭以前打开的数据库连接
* [mysqli::commit](http://php.p2hp.com/manual/zh/mysqli.commit.php) - (mysqli_commit)提交当前事务
* [mysqli::$ connect_errno](http://php.p2hp.com/manual/zh/mysqli.connect-errno.php) - (mysqli_connect_errno) 返回上次连接调用的错误代码
* [mysqli::$ connect_error](http://php.p2hp.com/manual/zh/mysqli.connect-error.php) - (mysqli_connect_error)返回上次连接错误的字符串描述
* [mysqli::__ construct](http://php.p2hp.com/manual/zh/mysqli.construct.php) - (mysqli_connect)打开与MySQL服务器的新连接
* [mysqli::debug](http://php.p2hp.com/manual/zh/mysqli.debug.php) - (mysqli_debug)执行调试操作
* [mysqli::dump_debug_info](http://php.p2hp.com/manual/zh/mysqli.dump-debug-info.php) - (mysqli_dump_debug_info)将调试信息转储到日志中
* [mysqli::$ errno](http://php.p2hp.com/manual/zh/mysqli.errno.php) - (mysqli_errno)返回最近函数调用的错误代码
* [mysqli::$ error_list](http://php.p2hp.com/manual/zh/mysqli.error-list.php) - (mysqli_error_list)返回上一个执行命令的错误列表
* [mysqli::$ error错误](http://php.p2hp.com/manual/zh/mysqli.error.php) - (mysqli_error)返回上一个的字符串描述
* [mysqli::$ field_count](http://php.p2hp.com/manual/zh/mysqli.field-count.php) -  (mysqli_field_count)返回最近查询的列数
* [mysqli::get_charset](http://php.p2hp.com/manual/zh/mysqli.get-charset.php) - (mysqli_get_charset)返回一个字符集对象
* [mysqli::$ client_info](http://php.p2hp.com/manual/zh/mysqli.get-client-info.php) - (mysqli_get_client_info)获取MySQL客户端信息
* [mysqli::$ client_version](http://php.p2hp.com/manual/zh/mysqli.get-client-version.php) - (mysqli_get_client_version)以整数形式返回MySQL客户端版本
* [mysqli::get_connection_stats](http://php.p2hp.com/manual/zh/mysqli.get-connection-stats.php) - (mysqli_get_connection_stats)返回有关客户端连接的统计信息
* [mysqli::$ host_info](http://php.p2hp.com/manual/zh/mysqli.get-host-info.php) - (mysqli_get_host_info)返回表示所用连接类型的字符串
* [mysqli::$ protocol_version](http://php.p2hp.com/manual/zh/mysqli.get-proto-info.php) - (mysqli_get_proto_info)返回使用的MySQL协议的版本
* [mysqli::$ server_info](http://php.p2hp.com/manual/zh/mysqli.get-server-info.php) - (mysqli_get_server_info)返回MySQL服务器的版本
* [mysqli::$ server_version](http://php.p2hp.com/manual/zh/mysqli.get-server-version.php) - (mysqli_get_server_version)以整数形式返回MySQL服务器的版本
* [mysqli::get_warnings](http://php.p2hp.com/manual/zh/mysqli.get-warnings.php) - (mysqli_get_warnings)获得SHOW WARNINGS的结果
* [mysqli::$ info](http://php.p2hp.com/manual/zh/mysqli.info.php) - (mysqli_info)检索有关最近执行的查询的信息
* [mysqli::init](http://php.p2hp.com/manual/zh/mysqli.init.php) - (mysqli_init)初始化MySQLi并返回一个与mysqli_real_connect()一起使用的资源
* [mysqli::$ insert_id](http://php.p2hp.com/manual/zh/mysqli.insert-id.php) - (mysqli_insert_id)返回最新查询中使用的自动生成的id
* [mysqli::kill](http://php.p2hp.com/manual/zh/mysqli.kill.php) - (mysqli_kill)要求服务器终止MySQL线程
* [mysqli::more_results](http://php.p2hp.com/manual/zh/mysqli.more-results.php) -  (mysqli_more_results)检查多查询是否还有查询结果
* [mysqli::multi_query](http://php.p2hp.com/manual/zh/mysqli.multi-query.php) - (mysqli_multi_query)对数据库执行查询
* [mysqli::next_result](http://php.p2hp.com/manual/zh/mysqli.next-result.php) - (mysqli_next_result)从multi_query准备下一个结果
* [mysqli::options](http://php.p2hp.com/manual/zh/mysqli.options.php) - (mysqli_options)设置选项
* [mysqli::ping](http://php.p2hp.com/manual/zh/mysqli.ping.php) - (mysqli_ping)ping服务器连接，或者如果连接断开，则尝试重新连接
* [mysqli::poll](http://php.p2hp.com/manual/zh/mysqli.poll.php) - (mysqli_poll)民意调查连接
* [mysqli::prepare](http://php.p2hp.com/manual/zh/mysqli.prepare.php) - (mysqli_prepare)准备一条SQL语句以便执行
* [mysqli::query](http://php.p2hp.com/manual/zh/mysqli.query.php) - (mysqli_query)对数据库执行查询
* [mysqli::real_connect](http://php.p2hp.com/manual/zh/mysqli.real-connect.php) - (mysqli_real_connect)打开与mysql服务器的连接
* [mysqli::real_escape_string](http://php.p2hp.com/manual/zh/mysqli.real-escape-string.php) - (mysqli_real_escape_string) 在SQL语句中使用字符串中的特殊字符转义，并考虑连接的当前字符集
* [mysqli::real_query](http://php.p2hp.com/manual/zh/mysqli.real-query.php) - (mysqli_real_query)执行SQL查询
* [mysqli::reap_async_query](http://php.p2hp.com/manual/zh/mysqli.reap-async-query.php) - (mysqli_reap_async_query)从异步查询中获取结果
* [mysqli::refresh](http://php.p2hp.com/manual/zh/mysqli.refresh.php) - (mysqli_refresh)刷新
* [mysqli::release_savepoint](http://php.p2hp.com/manual/zh/mysqli.release-savepoint.php) - (mysqli_release_savepoint)从当前事务的保存点集中删除指定的保存点
* [mysqli::rollback回滚](http://php.p2hp.com/manual/zh/mysqli.rollback.php) - (mysqli_rollback)当前事务
* [mysqli::rpl_query_type](http://php.p2hp.com/manual/zh/mysqli.rpl-query-type.php) - (mysqli_rpl_query_type)返回RPL查询类型
* [mysqli::savepoint](http://php.p2hp.com/manual/zh/mysqli.savepoint.php) - (mysqli_savepoint)设置命名的事务保存点
* [mysqli::select_db](http://php.p2hp.com/manual/zh/mysqli.select-db.php) - (mysqli_select_db)选择数据库查询的默认数据库
* [mysqli::send_query](http://php.p2hp.com/manual/zh/mysqli.send-query.php) - (mysqli_send_query)发送查询并返回
* [mysqli::set_charset](http://php.p2hp.com/manual/zh/mysqli.set-charset.php) - (mysqli_set_charset)设置默认客户端字符集
* [mysqli::set_local_infile_default](http://php.p2hp.com/manual/zh/mysqli.set-local-infile-default.php) - (mysqli_set_local_infile_default) 为load local infile命令取消设置用户定义的处理程序
* [mysqli::set_local_infile_handler](http://php.p2hp.com/manual/zh/mysqli.set-local-infile-handler.php) - (mysqli_set_local_infile_handler)为LOAD DATA LOCAL INFILE命令设置回调函数
* [mysqli::$ sqlstate](http://php.p2hp.com/manual/zh/mysqli.sqlstate.php) - (mysqli_sqlstate)返回先前MySQL操作的SQLSTATE错误
* [mysqli::ssl_set](http://php.p2hp.com/manual/zh/mysqli.ssl-set.php) - (mysqli_ssl_set)用于使用SSL建立安全连接
* [mysqli::stat](http://php.p2hp.com/manual/zh/mysqli.stat.php) -  (mysqli_stat)获取当前系统状态
* [mysqli::stmt_init](http://php.p2hp.com/manual/zh/mysqli.stmt-init.php) - (mysqli_stmt_init)初始化一个语句并返回一个与mysqli_stmt_prepare一起使用的对象
* [mysqli::store_result](http://php.p2hp.com/manual/zh/mysqli.store-result.php) - (mysqli_store_result)从上一个查询中传输结果集
* [mysqli::$ thread_id](http://php.p2hp.com/manual/zh/mysqli.thread-id.php) - (mysqli_thread_id)返回当前连接的线程ID
* [mysqli::thread_safe](http://php.p2hp.com/manual/zh/mysqli.thread-safe.php) - (mysqli_thread_safe)返回是否给出线程安全性
* [mysqli::use_result](http://php.p2hp.com/manual/zh/mysqli.use-result.php) - (mysqli_use_result)启动结果集检索
* [mysqli::$ warning_count](http://php.p2hp.com/manual/zh/mysqli.warning-count.php) - (mysqli_warning_count)返回给定链接的最后一个查询的警告数
* mysqli_stmt - mysqli_stmt类
* [mysqli_stmt::$ affected_rows](http://php.p2hp.com/manual/zh/mysqli-stmt.affected-rows.php) -  (mysqli_stmt_affected_rows)返回上次执行的语句更改，删除或插入的总行数
* [mysqli_stmt::attr_get](http://php.p2hp.com/manual/zh/mysqli-stmt.attr-get.php) - (mysqli_stmt_attr_get)用于获取语句属性的当前值
* [mysqli_stmt::attr_set预](http://php.p2hp.com/manual/zh/mysqli-stmt.attr-set.php) - (mysqli_stmt_attr_set)用于修改准备语句的行为
* [mysqli_stmt::bind_param预](http://php.p2hp.com/manual/zh/mysqli-stmt.bind-param.php) - (mysqli_stmt_bind_param)将变量作为参数绑定到准备语句
* [mysqli_stmt::bind_result预](http://php.p2hp.com/manual/zh/mysqli-stmt.bind-result.php) - (mysqli_stmt_bind_result)将变量绑定到结果存储的准备语句
* [mysqli_stmt::close](http://php.p2hp.com/manual/zh/mysqli-stmt.close.php) - (mysqli_stmt_close)关闭准备好的语句
* [mysqli_stmt::__ construct](http://php.p2hp.com/manual/zh/mysqli-stmt.construct.php) - 构造一个新的mysqli_stmt对象
* [mysqli_stmt::data_seek](http://php.p2hp.com/manual/zh/mysqli-stmt.data-seek.php) - (mysqli_stmt_data_seek)寻找语句结果集中的任意行
* [mysqli_stmt::$ errno](http://php.p2hp.com/manual/zh/mysqli-stmt.errno.php) - (mysqli_stmt_errno)返回最近语句调用的错误代码
* [mysqli_stmt::$ error_list](http://php.p2hp.com/manual/zh/mysqli-stmt.error-list.php) - (mysqli_stmt_error_list)返回上一个执行语句的错误列表
* [mysqli_stmt::$ error](http://php.p2hp.com/manual/zh/mysqli-stmt.error.php) - (mysqli_stmt_error)返回上一个语句错误的字符串描述
* [mysqli_stmt::execute](http://php.p2hp.com/manual/zh/mysqli-stmt.execute.php) - (mysqli_stmt_execute)执行准备好的Query
* [mysqli_stmt::fetch预提取](http://php.p2hp.com/manual/zh/mysqli-stmt.fetch.php) - (mysqli_stmt_fetch)将准备语句的结果到绑定变量中
* [mysqli_stmt::$ field_count](http://php.p2hp.com/manual/zh/mysqli-stmt.field-count.php) - (mysqli_stmt_field_count)返回给定语句中的字段数
* [mysqli_stmt::free_result](http://php.p2hp.com/manual/zh/mysqli-stmt.free-result.php) -  (mysqli_stmt_free_result)释放给定语句句柄的存储结果内存
* [mysqli_stmt::get_result预](http://php.p2hp.com/manual/zh/mysqli-stmt.get-result.php) - (mysqli_stmt_get_result)从准备语句中获取结果集
* [mysqli_stmt::get_warnings](http://php.p2hp.com/manual/zh/mysqli-stmt.get-warnings.php) - (mysqli_stmt_get_warnings)获取SHOW WARNINGS的结果
* [mysqli_stmt::$ insert_id](http://php.p2hp.com/manual/zh/mysqli-stmt.insert-id.php) - (mysqli_stmt_insert_id)获取先前INSERT操作生成的ID
* [mysqli_stmt::more_results](http://php.p2hp.com/manual/zh/mysqli-stmt.more-results.php) - (mysqli_stmt_more_results) 检查多个查询是否有更多查询结果
* [mysqli_stmt::next_result](http://php.p2hp.com/manual/zh/mysqli-stmt.next-result.php) - (mysqli_stmt_next_result)从多个查询中读取下一个结果
* [mysqli_stmt::$ num_rows](http://php.p2hp.com/manual/zh/mysqli-stmt.num-rows.php) - (mysqli_stmt_num_rows)返回语句结果集中的行数
* [mysqli_stmt::$ param_count](http://php.p2hp.com/manual/zh/mysqli-stmt.param-count.php) - (mysqli_stmt_param_count)返回给定语句的参数个数
* [mysqli_stmt::prepare](http://php.p2hp.com/manual/zh/mysqli-stmt.prepare.php) - (mysqli_stmt_prepare)准备一条SQL语句以便执行
* [mysqli_stmt::reset预](http://php.p2hp.com/manual/zh/mysqli-stmt.reset.php) - (mysqli_stmt_reset)重置准备语句
* [mysqli_stmt::result_metadata预](http://php.p2hp.com/manual/zh/mysqli-stmt.result-metadata.php) - (mysqli_stmt_result_metadata)从准备语句返回结果集元数据
* [mysqli_stmt::send_long_data](http://php.p2hp.com/manual/zh/mysqli-stmt.send-long-data.php) -  (mysqli_stmt_send_long_data)以块为单位发送数据
* [mysqli_stmt::$ sqlstate](http://php.p2hp.com/manual/zh/mysqli-stmt.sqlstate.php) - (mysqli_stmt_sqlstate)从前一个语句操作返回SQLSTATE错误
* [mysqli_stmt::store_result预](http://php.p2hp.com/manual/zh/mysqli-stmt.store-result.php) - (mysqli_stmt_store_result)从准备语句中传输结果集

:::
::: card 图像处理GD

* [mysqli_result::$ current_field](http://php.p2hp.com/manual/zh/mysqli-result.current-field.php) - (mysqli_field_tell)获取结果指针的当前字段偏移量
* [mysqli_result::data_seek](http://php.p2hp.com/manual/zh/mysqli-result.data-seek.php) - (mysqli_data_seek)将结果指针调整为结果中的任意行
* [mysqli_result::fetch_all提取](http://php.p2hp.com/manual/zh/mysqli-result.fetch-all.php) - (mysqli_fetch_all)将所有结果行为关联数组，数字数组或两者
* [mysqli_result::fetch_array](http://php.p2hp.com/manual/zh/mysqli-result.fetch-array.php) - (mysqli_fetch_array)将结果行提取为关联行，数字数组或两者
* [mysqli_result::fetch_assoc](http://php.p2hp.com/manual/zh/mysqli-result.fetch-assoc.php) - (mysqli_fetch_assoc)将结果行作为关联数组获取
* [mysqli_result::fetch_field_direct](http://php.p2hp.com/manual/zh/mysqli-result.fetch-field-direct.php) - (mysqli_fetch_field_direct)获取单个字段的元数据
* [mysqli_result::fetch_field](http://php.p2hp.com/manual/zh/mysqli-result.fetch-field.php) - (mysqli_fetch_field)返回结果集中的下一个字段
* [mysqli_result::fetch_fields](http://php.p2hp.com/manual/zh/mysqli-result.fetch-fields.php) - (mysqli_fetch_fields)返回表示结果集中字段的对象数组
* [mysqli_result::fetch_object](http://php.p2hp.com/manual/zh/mysqli-result.fetch-object.php) - (mysqli_fetch_object)将结果集的当前行作为对象返回
* [mysqli_result::fetch_row](http://php.p2hp.com/manual/zh/mysqli-result.fetch-row.php) - (mysqli_fetch_row)将结果行作为枚举数组
* [mysqli_result::$ field_count](http://php.p2hp.com/manual/zh/mysqli-result.field-count.php) -  (mysqli_num_fields)获取结果中的字段数
* [mysqli_result::field_seek](http://php.p2hp.com/manual/zh/mysqli-result.field-seek.php) - (mysqli_field_seek)将结果指针设置为指定的字段偏移量
* [mysqli_result::free](http://php.p2hp.com/manual/zh/mysqli-result.free.php) - (mysqli_free_result)释放与结果相关的内存
* [mysqli_result::$ lengths](http://php.p2hp.com/manual/zh/mysqli-result.lengths.php) - (mysqli_fetch_lengths)返回结果集中当前行的列长度
* [mysqli_result::$ num_rows](http://php.p2hp.com/manual/zh/mysqli-result.num-rows.php) - (mysqli_num_rows)获取结果中的行数
* 别名和不推荐使用的Mysqli函数
* [mysqli_bind_parammysqli_stmt_bind_param的](http://php.p2hp.com/manual/zh/function.mysqli-bind-param.php) - 别名
* [mysqli_bind_resultmysqli_stmt_bind_result的](http://php.p2hp.com/manual/zh/function.mysqli-bind-result.php) - 别名
* [mysqli_client_encodingmysqli_character_set_name的](http://php.p2hp.com/manual/zh/function.mysqli-client-encoding.php) - 别名
* [mysqli_connect](http://php.p2hp.com/manual/zh/function.mysqli-connect.php) - mysqli::__construct的别名
* [mysqli::disable_reads_from_master](http://php.p2hp.com/manual/zh/function.mysqli-disable-reads-from-master.php) - 禁用从master读取
* [mysqli_disable_rpl_parse](http://php.p2hp.com/manual/zh/function.mysqli-disable-rpl-parse.php) - 禁用RPL解析
* [mysqli_enable_reads_from_master](http://php.p2hp.com/manual/zh/function.mysqli-enable-reads-from-master.php) - 启用从master读取
* [mysqli_enable_rpl_parse](http://php.p2hp.com/manual/zh/function.mysqli-enable-rpl-parse.php) - 启用RPL解析
* [mysqli_escape_stringmysqli_real_escape_string的](http://php.p2hp.com/manual/zh/function.mysqli-escape-string.php) - 别名
* [mysqli_executemysqli_stmt_execute的](http://php.p2hp.com/manual/zh/function.mysqli-execute.php) - 别名
* [mysqli_fetchmysqli_stmt_fetch的](http://php.p2hp.com/manual/zh/function.mysqli-fetch.php) - 别名
* [mysqli_get_cache_stats](http://php.p2hp.com/manual/zh/function.mysqli-get-cache-stats.php) - 返回客户端Zval缓存统计信息
* [mysqli_get_client_stats](http://php.p2hp.com/manual/zh/function.mysqli-get-client-stats.php) - 返回客户端每进程统计信息
* [mysqli_get_links_stats](http://php.p2hp.com/manual/zh/function.mysqli-get-links-stats.php) - 返回有关打开和缓存链接的信息
* [mysqli_get_metadatamysqli_stmt_result_metadata的](http://php.p2hp.com/manual/zh/function.mysqli-get-metadata.php) - 别名
* [mysqli_master_query](http://php.p2hp.com/manual/zh/function.mysqli-master-query.php) - 在主/从设置中强制执行主服务器上的查询
* [mysqli_param_count](http://php.p2hp.com/manual/zh/function.mysqli-param-count.php) - mysqli_stmt_param_count的别名
* [mysqli_report](http://php.p2hp.com/manual/zh/function.mysqli-report.php) - mysqli_driver-&gt; report_mode的别名
* [mysqli_rpl_parse_enabled](http://php.p2hp.com/manual/zh/function.mysqli-rpl-parse-enabled.php) - 检查是否启用了RPL解析
* [mysqli_rpl_probe](http://php.p2hp.com/manual/zh/function.mysqli-rpl-probe.php) - RPL探测器
* [mysqli_send_long_datamysqli_stmt_send_long_data的](http://php.p2hp.com/manual/zh/function.mysqli-send-long-data.php) - 别名
* [mysqli::set_optmysqli_options的](http://php.p2hp.com/manual/zh/function.mysqli-set-opt.php) - 别名
* [mysqli_slave_query](http://php.p2hp.com/manual/zh/function.mysqli-slave-query.php) - 强制在主/从设置中对从站执行查询

:::
::: card 文件信息Fileinfo

* [finfo_buffer](http://php.p2hp.com/manual/zh/function.finfo-buffer.php) - 返回有关字符串缓冲区的信息
* [finfo_close](http://php.p2hp.com/manual/zh/function.finfo-close.php) - 关闭fileinfo资源
* [finfo_file](http://php.p2hp.com/manual/zh/function.finfo-file.php) - 返回有关文件的信息
* [finfo_open](http://php.p2hp.com/manual/zh/function.finfo-open.php) - 创建新的fileinfo资源
* [finfo_set_flags](http://php.p2hp.com/manual/zh/function.finfo-set-flags.php) - 设置libmagic配置选项
* [mime_content_type](http://php.p2hp.com/manual/zh/function.mime-content-type.php) - 检测文件的MIME内容类型

:::
::: card 字符集转换iconv

* [iconv_get_encoding](http://php.p2hp.com/manual/zh/function.iconv-get-encoding.php) - 检索iconv扩展的内部配置变量
* [iconv_mime_decode_headers](http://php.p2hp.com/manual/zh/function.iconv-mime-decode-headers.php) - 一次解码多个MIME标头字段
* [iconv_mime_decode](http://php.p2hp.com/manual/zh/function.iconv-mime-decode.php) - 解码MIME标头字段
* [iconv_mime_encode](http://php.p2hp.com/manual/zh/function.iconv-mime-encode.php) - 编写MIME标头字段
* [iconv_set_encoding](http://php.p2hp.com/manual/zh/function.iconv-set-encoding.php) - 设置字符编码转换的当前设置
* [iconv_strlen](http://php.p2hp.com/manual/zh/function.iconv-strlen.php) - 返回字符串的字符数
* [iconv_strpos大海捞针](http://php.p2hp.com/manual/zh/function.iconv-strpos.php) - 查找中第一次出现针的位置
* [iconv_strrpos大海捞针](http://php.p2hp.com/manual/zh/function.iconv-strrpos.php) - 查找中最后一次出现的针
* [iconv_substr](http://php.p2hp.com/manual/zh/function.iconv-substr.php) - 剪切掉一部分字符串
* [iconv](http://php.p2hp.com/manual/zh/function.iconv.php) - 将字符串转换为请求的字符编码
* [ob_iconv_handler](http://php.p2hp.com/manual/zh/function.ob-iconv-handler.php) - 将字符编码转换为输出缓冲区处理程序

:::
::: card 图像处理GD

* [gd_info](http://php.p2hp.com/manual/zh/function.gd-info.php) - 检索有关当前安装的GD库的信息
* [getimagesize](http://php.p2hp.com/manual/zh/function.getimagesize.php) - 获取图像的大小
* [getimagesizefromstring](http://php.p2hp.com/manual/zh/function.getimagesizefromstring.php) - 从字符串中获取图像的大小
* [image_type_to_extension](http://php.p2hp.com/manual/zh/function.image-type-to-extension.php) - 获取图像类型的文件扩展名
* [image_type_to_mime_type](http://php.p2hp.com/manual/zh/function.image-type-to-mime-type.php) - 获取getimagesize，exif_read_data，exif_t​​humbnail，exif_imagetype返回的图像类型的Mime-Type
* [image2wbmp](http://php.p2hp.com/manual/zh/function.image2wbmp.php) - 将图像输出到浏览器或文件
* [imageaffine](http://php.p2hp.com/manual/zh/function.imageaffine.php) - 使用可选的剪切区域返回包含仿射变换的src图像的图像
* [imageaffinematrixconcat](http://php.p2hp.com/manual/zh/function.imageaffinematrixconcat.php) - 连接两个仿射变换矩阵
* [imageaffinematrixget](http://php.p2hp.com/manual/zh/function.imageaffinematrixget.php) - 获取仿射变换矩阵
* [imagealphablending](http://php.p2hp.com/manual/zh/function.imagealphablending.php) - 设置图像的混合模式
* [imageantialias](http://php.p2hp.com/manual/zh/function.imageantialias.php) - 是否应使用抗锯齿功能
* [imagearc](http://php.p2hp.com/manual/zh/function.imagearc.php) - 绘制弧形
* [imagebmp](http://php.p2hp.com/manual/zh/function.imagebmp.php) - 将BMP图像输出到浏览器或文件
* [imagechar](http://php.p2hp.com/manual/zh/function.imagechar.php) - 水平绘制一个字符
* [imagecharup](http://php.p2hp.com/manual/zh/function.imagecharup.php) - 垂直绘制一个字符
* [imagecolorallocate](http://php.p2hp.com/manual/zh/function.imagecolorallocate.php) - 为图像分配颜色
* [imagecolorallocatealpha](http://php.p2hp.com/manual/zh/function.imagecolorallocatealpha.php) - 为图像分配颜色
* [imagecolorat](http://php.p2hp.com/manual/zh/function.imagecolorat.php) - 获取像素颜色的索引
* [imagecolorclosest](http://php.p2hp.com/manual/zh/function.imagecolorclosest.php) - 获取与指定颜色最接近的颜色的索引
* [imagecolorclosestalpha](http://php.p2hp.com/manual/zh/function.imagecolorclosestalpha.php) - 获取与指定颜色+ alpha最接近的颜色的索引
* [imagecolorclosesthwb](http://php.p2hp.com/manual/zh/function.imagecolorclosesthwb.php) - 获取具有色调，白色和黑度的颜色的索引
* [imagecolordeallocate](http://php.p2hp.com/manual/zh/function.imagecolordeallocate.php) - 为图像取消分配颜色
* [imagecolorexact](http://php.p2hp.com/manual/zh/function.imagecolorexact.php) - 获取指定颜色的索引
* [imagecolorexactalpha](http://php.p2hp.com/manual/zh/function.imagecolorexactalpha.php) - 获取指定颜色+ alpha的索引
* [imagecolormatch](http://php.p2hp.com/manual/zh/function.imagecolormatch.php) - 使图像调色板版本的颜色更接近真实颜色版本
* [imagecolorresolve](http://php.p2hp.com/manual/zh/function.imagecolorresolve.php) - 获取指定颜色的索引或其最接近的替代颜色
* [imagecolorresolvealpha](http://php.p2hp.com/manual/zh/function.imagecolorresolvealpha.php) - 获取指定颜色的索引+alpha或其最接近的替代选项
* [imagecolorset](http://php.p2hp.com/manual/zh/function.imagecolorset.php) - 设置指定调色板索引的颜色
* [imagecolorsforindex](http://php.p2hp.com/manual/zh/function.imagecolorsforindex.php) - 获取索引的颜色
* [imagecolorstotal](http://php.p2hp.com/manual/zh/function.imagecolorstotal.php) - 找出图像调色板中的颜色数
* [imagecolortransparent](http://php.p2hp.com/manual/zh/function.imagecolortransparent.php) - 将颜色定义为透明
* [imageconvolution](http://php.p2hp.com/manual/zh/function.imageconvolution.php) - 使用系数和偏移量应用3x3卷积矩阵
* [imagecopy](http://php.p2hp.com/manual/zh/function.imagecopy.php) - 复制图像的一部分
* [imagecopymerge](http://php.p2hp.com/manual/zh/function.imagecopymerge.php) - 复制并合并图像的一部分
* [imagecopymergegray](http://php.p2hp.com/manual/zh/function.imagecopymergegray.php) - 使用灰度复制和合并图像的一部分
* [imagecopyresampled](http://php.p2hp.com/manual/zh/function.imagecopyresampled.php) - 使用重新采样复制和调整图像的一部分
* [imagecopyresized](http://php.p2hp.com/manual/zh/function.imagecopyresized.php) - 复制和调整图像的一部分
* [imagecreate](http://php.p2hp.com/manual/zh/function.imagecreate.php) - 创建一个新的基于调色板的图像
* [imagecreatefrombmp](http://php.p2hp.com/manual/zh/function.imagecreatefrombmp.php) - 从文件或URL创建新图像
* [imagecreatefromgd2](http://php.p2hp.com/manual/zh/function.imagecreatefromgd2.php) - 从GD2文件或URL创建新图像
* [imagecreatefromgd2part](http://php.p2hp.com/manual/zh/function.imagecreatefromgd2part.php) - 从GD2文件或URL的给定部分创建新图像
* [imagecreatefromgd](http://php.p2hp.com/manual/zh/function.imagecreatefromgd.php) - 从GD文件或URL创建新图像
* [imagecreatefromgif](http://php.p2hp.com/manual/zh/function.imagecreatefromgif.php) - 从文件或URL创建新图像
* [imagecreatefromjpeg](http://php.p2hp.com/manual/zh/function.imagecreatefromjpeg.php) - 从文件或URL创建新图像
* [imagecreatefrompng](http://php.p2hp.com/manual/zh/function.imagecreatefrompng.php) - 从文件或URL创建新图像
* [imagecreatefromstring](http://php.p2hp.com/manual/zh/function.imagecreatefromstring.php) - 从字符串中的图像流创建新图像
* [imagecreatefromwbmp](http://php.p2hp.com/manual/zh/function.imagecreatefromwbmp.php) - 从文件或URL创建新图像
* [imagecreatefromwebp](http://php.p2hp.com/manual/zh/function.imagecreatefromwebp.php) - 从文件或URL创建新图像
* [imagecreatefromxbm](http://php.p2hp.com/manual/zh/function.imagecreatefromxbm.php) - 从文件或URL创建新图像
* [imagecreatefromxpm](http://php.p2hp.com/manual/zh/function.imagecreatefromxpm.php) - 从文件或URL创建新图像
* [imagecreatetruecolor](http://php.p2hp.com/manual/zh/function.imagecreatetruecolor.php) - 创建一个新的真彩色图像
* [imagecrop](http://php.p2hp.com/manual/zh/function.imagecrop.php) - 将图像裁剪到给定的矩形
* [imagecropauto](http://php.p2hp.com/manual/zh/function.imagecropauto.php) - 使用其中一种可用模式自动裁剪图像
* [imagedashedline](http://php.p2hp.com/manual/zh/function.imagedashedline.php) - 画一条虚线
* [imagedestroy](http://php.p2hp.com/manual/zh/function.imagedestroy.php) - 销毁图像
* [imageellipse](http://php.p2hp.com/manual/zh/function.imageellipse.php) - 绘制一个椭圆
* [imagefill](http://php.p2hp.com/manual/zh/function.imagefill.php) - 洪水填充
* [imagefilledarc](http://php.p2hp.com/manual/zh/function.imagefilledarc.php) - 绘制部分圆弧并填充它
* [imagefilledellipse](http://php.p2hp.com/manual/zh/function.imagefilledellipse.php) - 绘制填充的椭圆
* [imagefilledpolygon](http://php.p2hp.com/manual/zh/function.imagefilledpolygon.php) - 绘制填充多边形
* [imagefilledrectangle](http://php.p2hp.com/manual/zh/function.imagefilledrectangle.php) - 绘制一个填充的矩形
* [imagefilltoborder](http://php.p2hp.com/manual/zh/function.imagefilltoborder.php) - 洪水填充到特定颜色
* [imagefilter](http://php.p2hp.com/manual/zh/function.imagefilter.php) - 对图像应用滤镜
* [imageflip](http://php.p2hp.com/manual/zh/function.imageflip.php) - 使用给定模式翻转图像
* [imagefontheight](http://php.p2hp.com/manual/zh/function.imagefontheight.php) - 获取字体高度
* [imagefontwidth](http://php.p2hp.com/manual/zh/function.imagefontwidth.php) - 获取字体宽度
* [imageftbbox](http://php.p2hp.com/manual/zh/function.imageftbbox.php) - 通过freetype2使用字体给出文本的边界框
* [imagefttext](http://php.p2hp.com/manual/zh/function.imagefttext.php) - 使用FreeType 2使用字体将文本写入图像
* [imagegammacorrect](http://php.p2hp.com/manual/zh/function.imagegammacorrect.php) - 对GD图像应用伽马校正
* [imagegd2](http://php.p2hp.com/manual/zh/function.imagegd2.php) - 将GD2图像输出到浏览器或文件
* [imagegd](http://php.p2hp.com/manual/zh/function.imagegd.php) - 将GD图像输出到浏览器或文件
* [imagegetclip](http://php.p2hp.com/manual/zh/function.imagegetclip.php) - 获取剪切矩形
* [imagegif](http://php.p2hp.com/manual/zh/function.imagegif.php) - 将图像输出到浏览器或文件
* [imagegrabscreen](http://php.p2hp.com/manual/zh/function.imagegrabscreen.php) - 捕获整个屏幕
* [imagegrabwindow](http://php.p2hp.com/manual/zh/function.imagegrabwindow.php) - 捕获一个窗口
* [imageinterlace](http://php.p2hp.com/manual/zh/function.imageinterlace.php) - 启用或禁用隔行扫描
* [imageistruecolor](http://php.p2hp.com/manual/zh/function.imageistruecolor.php) - 查找图像是否为真彩色图像
* [imagejpeg](http://php.p2hp.com/manual/zh/function.imagejpeg.php) - 将图像输出到浏览器或文件
* [imagelayereffect](http://php.p2hp.com/manual/zh/function.imagelayereffect.php) - 设置alpha混合标志以使用分层效果
* [imageline](http://php.p2hp.com/manual/zh/function.imageline.php) - 画一条线
* [imageloadfont](http://php.p2hp.com/manual/zh/function.imageloadfont.php) - 加载新字体
* [imageopenpolygon](http://php.p2hp.com/manual/zh/function.imageopenpolygon.php) - 绘制一个开放的多边形
* [imagepalettecopy](http://php.p2hp.com/manual/zh/function.imagepalettecopy.php) - 将调色板从一个图像复制到另一个图像
* [imagepalettetotruecolor](http://php.p2hp.com/manual/zh/function.imagepalettetotruecolor.php) - 将基于调色板的图像转换为真彩色
* [imagepng](http://php.p2hp.com/manual/zh/function.imagepng.php) - 将PNG图像输出到浏览器或文件
* [imagepolygon](http://php.p2hp.com/manual/zh/function.imagepolygon.php) - 绘制多边形
* [imagepsbbox](http://php.p2hp.com/manual/zh/function.imagepsbbox.php) - 使用PostScript Type1字体给出文本矩形的边界框
* [imagepsencodefont](http://php.p2hp.com/manual/zh/function.imagepsencodefont.php) - 更改字体的字符编码向量
* [imagepsextendfont](http://php.p2hp.com/manual/zh/function.imagepsextendfont.php) - 扩展或压缩字体
* [imagepsfreefont](http://php.p2hp.com/manual/zh/function.imagepsfreefont.php) - PostScript Type 1字体使用的可用内存
* [imagepsloadfont](http://php.p2hp.com/manual/zh/function.imagepsloadfont.php) - 从文件加载PostScript Type 1字体
* [imagepsslantfont](http://php.p2hp.com/manual/zh/function.imagepsslantfont.php) - 倾斜一种字体
* [imagepstext](http://php.p2hp.com/manual/zh/function.imagepstext.php) - 使用PostScript Type1字体在图像上绘制文本
* [imagerectangle](http://php.p2hp.com/manual/zh/function.imagerectangle.php) - 绘制一个矩形
* [imageresolution](http://php.p2hp.com/manual/zh/function.imageresolution.php) - 获取或设置图像的分辨率
* [imagerotate](http://php.p2hp.com/manual/zh/function.imagerotate.php) - 以给定角度旋转图像
* [imagesavealpha](http://php.p2hp.com/manual/zh/function.imagesavealpha.php) - 保存PNG图像时是否保留完整的Alpha通道信息
* [imagescale](http://php.p2hp.com/manual/zh/function.imagescale.php) - 使用给定的新宽度和高度缩放图像
* [imagesetbrush](http://php.p2hp.com/manual/zh/function.imagesetbrush.php) - 为画线设置画笔图像
* [imagesetclip](http://php.p2hp.com/manual/zh/function.imagesetclip.php) - 设置剪切矩形
* [imagesetinterpolation](http://php.p2hp.com/manual/zh/function.imagesetinterpolation.php) - 设置插值方法
* [imagesetpixel](http://php.p2hp.com/manual/zh/function.imagesetpixel.php) - 设置单个像素
* [imagesetstyle](http://php.p2hp.com/manual/zh/function.imagesetstyle.php) - 设置线条绘制的样式
* [imagesetthickness](http://php.p2hp.com/manual/zh/function.imagesetthickness.php) - 设置线条图的粗细
* [imagesettile](http://php.p2hp.com/manual/zh/function.imagesettile.php) - 设置要填充的图块图像
* [imagestring](http://php.p2hp.com/manual/zh/function.imagestring.php) - 水平绘制一个字符串
* [imagestringup](http://php.p2hp.com/manual/zh/function.imagestringup.php) - 垂直绘制一个字符串
* [imagesx](http://php.p2hp.com/manual/zh/function.imagesx.php) - 获取图像宽度
* [imagesy](http://php.p2hp.com/manual/zh/function.imagesy.php) - 获取图像高度
* [imagetruecolortopalette](http://php.p2hp.com/manual/zh/function.imagetruecolortopalette.php) - 将真彩色图像转换为调色板图像
* [imagettfbbox](http://php.p2hp.com/manual/zh/function.imagettfbbox.php) - 使用TrueType字体给出文本的边界框
* [imagettftext](http://php.p2hp.com/manual/zh/function.imagettftext.php) - 使用TrueType字体将文本写入图像
* [imagetypes](http://php.p2hp.com/manual/zh/function.imagetypes.php) - 返回此PHP版本支持的图像类型
* [imagewbmp](http://php.p2hp.com/manual/zh/function.imagewbmp.php) - 将图像输出到浏览器或文件
* [imagewebp](http://php.p2hp.com/manual/zh/function.imagewebp.php) - 将WebP图像输出到浏览器或文件
* [imagexbm](http://php.p2hp.com/manual/zh/function.imagexbm.php) - 将XBM图像输出到浏览器或文件
* [iptcembed](http://php.p2hp.com/manual/zh/function.iptcembed.php) - 将二进制IPTC数据嵌入JPEG图像
* [iptcparse](http://php.p2hp.com/manual/zh/function.iptcparse.php) - 将二进制IPTC块解析为单个标记
* [jpeg2wbmp](http://php.p2hp.com/manual/zh/function.jpeg2wbmp.php) - 将JPEG图像文件转换为WBMP图像文件
* [png2wbmp](http://php.p2hp.com/manual/zh/function.png2wbmp.php) - 将PNG图像文件转换为WBMP图像文件

:::
::: card URLs

* [base64_decode](http://php.p2hp.com/manual/zh/function.base64-decode.php) - 解码用MIME base64编码的数据
* [base64_encode](http://php.p2hp.com/manual/zh/function.base64-encode.php) - 使用MIME base64编码数据
* [get_headers](http://php.p2hp.com/manual/zh/function.get-headers.php) - 获取服务器发送的所有标头以响应HTTP请求
* [get_meta_tags](http://php.p2hp.com/manual/zh/function.get-meta-tags.php) - 从文件中提取所有元标记内容属性并返回一个数组
* [http_build_query](http://php.p2hp.com/manual/zh/function.http-build-query.php) - 生成URL编码的查询字符串
* [parse_url](http://php.p2hp.com/manual/zh/function.parse-url.php) - 解析URL并返回其组件
* [rawurldecode](http://php.p2hp.com/manual/zh/function.rawurldecode.php) - 解码URL编码的字符串
* [rawurlencode](http://php.p2hp.com/manual/zh/function.rawurlencode.php) - 根据RFC 3986进行URL编码
* [urldecode](http://php.p2hp.com/manual/zh/function.urldecode.php) - 解码URL编码的字符串
* [urlencode](http://php.p2hp.com/manual/zh/function.urlencode.php) - URL编码字符串

:::
::: card 套接字Sockets

* [socket_accept](http://php.p2hp.com/manual/zh/function.socket-accept.php) - 接受套接字上的连接
* [socket_addrinfo_bind](http://php.p2hp.com/manual/zh/function.socket-addrinfo-bind.php) - 从给定的addrinfo创建并绑定到套接字
* [socket_addrinfo_connect](http://php.p2hp.com/manual/zh/function.socket-addrinfo-connect.php) - 从给定的addrinfo创建并连接到套接字
* [socket_addrinfo_explain](http://php.p2hp.com/manual/zh/function.socket-addrinfo-explain.php) - 获取有关addrinfo的信息
* [socket_addrinfo_lookup](http://php.p2hp.com/manual/zh/function.socket-addrinfo-lookup.php) - 获取有关给定主机名的getaddrinfo内容的数组
* [socket_bind](http://php.p2hp.com/manual/zh/function.socket-bind.php) - 将名称绑定到套接字
* [socket_clear_error](http://php.p2hp.com/manual/zh/function.socket-clear-error.php) - 清除套接字上的错误或上一个错误代码
* [socket_close](http://php.p2hp.com/manual/zh/function.socket-close.php) - 关闭套接字资源
* [socket_cmsg_space](http://php.p2hp.com/manual/zh/function.socket-cmsg-space.php) - 计算消息缓冲区大小
* [socket_connect](http://php.p2hp.com/manual/zh/function.socket-connect.php) - 在套接字上启动连接
* [socket_create_listen](http://php.p2hp.com/manual/zh/function.socket-create-listen.php) - 在端口上打开套接字以接受连接
* [socket_create_pair](http://php.p2hp.com/manual/zh/function.socket-create-pair.php) - 创建一对无法区分的套接字并将它们存储在一个数组中
* [socket_create](http://php.p2hp.com/manual/zh/function.socket-create.php) - 创建套接字(通信端点)
* [socket_export_stream](http://php.p2hp.com/manual/zh/function.socket-export-stream.php) - 将套接字扩展资源导出到封装套接字的流中
* [socket_get_option](http://php.p2hp.com/manual/zh/function.socket-get-option.php) - 获取套接字的套接字选项
* [socket_getoptsocket_get_option的](http://php.p2hp.com/manual/zh/function.socket-getopt.php) - 别名
* [socket_getpeername](http://php.p2hp.com/manual/zh/function.socket-getpeername.php) - 查询给定套接字的远程端，它可能导致主机/端口或Unix文件系统路径，具体取决于其类型
* [socket_getsockname](http://php.p2hp.com/manual/zh/function.socket-getsockname.php) - 查询给定套接字的本地端，该端口可能导致主机/端口或Unix文件系统路径，具体取决于其类型
* [socket_import_stream](http://php.p2hp.com/manual/zh/function.socket-import-stream.php) - 导入流
* [socket_last_error](http://php.p2hp.com/manual/zh/function.socket-last-error.php) - 返回套接字上的最后一个错误
* [socket_listen](http://php.p2hp.com/manual/zh/function.socket-listen.php) - 侦听套接字上的连接
* [socket_read](http://php.p2hp.com/manual/zh/function.socket-read.php) - 从套接字读取最大长度字节
* [socket_recv](http://php.p2hp.com/manual/zh/function.socket-recv.php) - 从连接的套接字接收数据
* [socket_recvfrom](http://php.p2hp.com/manual/zh/function.socket-recvfrom.php) - 从套接字接收数据，无论它是否是面向连接的
* [socket_recvmsg](http://php.p2hp.com/manual/zh/function.socket-recvmsg.php) - 阅读邮件
* [socket_select](http://php.p2hp.com/manual/zh/function.socket-select.php) - 在指定的超时套接字数组上运行select()系统调用
* [socket_send](http://php.p2hp.com/manual/zh/function.socket-send.php) - 将数据发送到连接的套接字
* [socket_sendmsg](http://php.p2hp.com/manual/zh/function.socket-sendmsg.php) - 发送消息
* [socket_sendto](http://php.p2hp.com/manual/zh/function.socket-sendto.php) - 向套接字发送消息，无论它是否已连接
* [socket_set_block](http://php.p2hp.com/manual/zh/function.socket-set-block.php) - 在套接字资源上设置阻塞模式
* [socket_set_nonblock](http://php.p2hp.com/manual/zh/function.socket-set-nonblock.php) - 为文件描述符fd设置非阻塞模式
* [socket_set_option](http://php.p2hp.com/manual/zh/function.socket-set-option.php) - 设置套接字的套接字选项
* [socket_setoptsocket_set_option的](http://php.p2hp.com/manual/zh/function.socket-setopt.php) - 别名
* [socket_shutdown](http://php.p2hp.com/manual/zh/function.socket-shutdown.php) - 关闭套接字以接收，发送或两者兼而有之
* [socket_strerror](http://php.p2hp.com/manual/zh/function.socket-strerror.php) - 返回描述套接字错误的字符串
* [socket_write](http://php.p2hp.com/manual/zh/function.socket-write.php) - 写入套接字
* [socket_wsaprotocol_info_export](http://php.p2hp.com/manual/zh/function.socket-wsaprotocol-info-export.php) - 导出WSAPROTOCOL_INFO结构
* [socket_wsaprotocol_info_import](http://php.p2hp.com/manual/zh/function.socket-wsaprotocol-info-import.php) - 从另一个进程导入套接字
* [socket_wsaprotocol_info_release](http://php.p2hp.com/manual/zh/function.socket-wsaprotocol-info-release.php) - 释放导出的WSAPROTOCOL_INFO结构

:::
::: card XML解析器

* [utf8_decode](http://php.p2hp.com/manual/zh/function.utf8-decode.php) - 将使用UTF-8编码的ISO-8859-1字符转换为单字节ISO-8859-1
* [utf8_encode](http://php.p2hp.com/manual/zh/function.utf8-encode.php) - 将ISO-8859-1字符串编码为UTF-8
* [xml_error_string](http://php.p2hp.com/manual/zh/function.xml-error-string.php) - 获取XML解析器错误字符串
* [xml_get_current_byte_index](http://php.p2hp.com/manual/zh/function.xml-get-current-byte-index.php) - 获取XML解析器的当前字节索引
* [xml_get_current_column_number](http://php.p2hp.com/manual/zh/function.xml-get-current-column-number.php) - 获取XML解析器的当前列号
* [xml_get_current_line_number](http://php.p2hp.com/manual/zh/function.xml-get-current-line-number.php) - 获取XML解析器的当前行号
* [xml_get_error_code](http://php.p2hp.com/manual/zh/function.xml-get-error-code.php) - 获取XML解析器错误代码
* [xml_parse_into_struct](http://php.p2hp.com/manual/zh/function.xml-parse-into-struct.php) - 将XML数据解析为数组结构
* [xml_parse](http://php.p2hp.com/manual/zh/function.xml-parse.php) - 开始解析XML文档
* [xml_parser_create_ns](http://php.p2hp.com/manual/zh/function.xml-parser-create-ns.php) - 创建具有名称空间支持的XML解析器
* [xml_parser_create](http://php.p2hp.com/manual/zh/function.xml-parser-create.php) - 创建XML解析器
* [xml_parser_free](http://php.p2hp.com/manual/zh/function.xml-parser-free.php) - 免费的XML解析器
* [xml_parser_get_option](http://php.p2hp.com/manual/zh/function.xml-parser-get-option.php) - 从XML解析器中获取选项
* [xml_parser_set_option](http://php.p2hp.com/manual/zh/function.xml-parser-set-option.php) - 在XML解析器中设置选项
* [xml_set_character_data_handler](http://php.p2hp.com/manual/zh/function.xml-set-character-data-handler.php) - 设置字符数据处理程序
* [xml_set_default_handler](http://php.p2hp.com/manual/zh/function.xml-set-default-handler.php) - 设置默认处理程序
* [xml_set_element_handler](http://php.p2hp.com/manual/zh/function.xml-set-element-handler.php) - 设置开始和结束元素处理程序
* [xml_set_end_namespace_decl_handler](http://php.p2hp.com/manual/zh/function.xml-set-end-namespace-decl-handler.php) - 设置结束名称空间声明处理程序
* [xml_set_external_entity_ref_handler](http://php.p2hp.com/manual/zh/function.xml-set-external-entity-ref-handler.php) - 设置外部实体引用处理程序
* [xml_set_notation_decl_handler](http://php.p2hp.com/manual/zh/function.xml-set-notation-decl-handler.php) - 设置表示法声明处理程序
* [xml_set_object](http://php.p2hp.com/manual/zh/function.xml-set-object.php) - 在对象中使用XML Parser
* [xml_set_processing_instruction_handler](http://php.p2hp.com/manual/zh/function.xml-set-processing-instruction-handler.php) - 设置处理指令(PI)处理程序
* [xml_set_start_namespace_decl_handler](http://php.p2hp.com/manual/zh/function.xml-set-start-namespace-decl-handler.php) - 设置启动命名空间声明处理程序
* [xml_set_unparsed_entity_decl_handler](http://php.p2hp.com/manual/zh/function.xml-set-unparsed-entity-decl-handler.php) - 设置未解析的实体声明处理程序

:::
::: card APC用户缓存

* [apcu_add](http://php.p2hp.com/manual/zh/function.apcu-add.php) - 在数据存储中缓存新变量
* [apcu_cache_info](http://php.p2hp.com/manual/zh/function.apcu-cache-info.php) - 从APCu的数据存储中检索缓存信息
* [apcu_cas](http://php.p2hp.com/manual/zh/function.apcu-cas.php) - 使用新值更新旧值
* [apcu_clear_cache](http://php.p2hp.com/manual/zh/function.apcu-clear-cache.php) - 清除APCu缓存
* [apcu_dec](http://php.p2hp.com/manual/zh/function.apcu-dec.php) - 减少存储的号码
* [apcu_delete](http://php.p2hp.com/manual/zh/function.apcu-delete.php) - 从缓存中删除存储的变量
* [apcu_entry](http://php.p2hp.com/manual/zh/function.apcu-entry.php) - 以原子方式获取或生成缓存条目
* [apcu_exists](http://php.p2hp.com/manual/zh/function.apcu-exists.php) - 检查条目是否存在
* [apcu_fetch](http://php.p2hp.com/manual/zh/function.apcu-fetch.php) - 从缓存中获取存储的变量
* [apcu_inc](http://php.p2hp.com/manual/zh/function.apcu-inc.php) - 增加存储的号码
* [apcu_sma_info](http://php.p2hp.com/manual/zh/function.apcu-sma-info.php) - 检索APCu共享内存分配信息
* [apcu_store](http://php.p2hp.com/manual/zh/function.apcu-store.php) - 在数据存储中缓存变量

:::
::: card 外部函数接口

* [FFI::addr](http://php.p2hp.com/manual/zh/ffi.addr.php) - 创建一个指向C数据的非托管指针
* [FFI::alignof](http://php.p2hp.com/manual/zh/ffi.alignof.php) - 获取对齐方式
* [FFI::arrayType](http://php.p2hp.com/manual/zh/ffi.arraytype.php) - 动态构造新的C数组类型
* [FFI::cast](http://php.p2hp.com/manual/zh/ffi.cast.php) - 执行C类型转换
* [FFI::cdef](http://php.p2hp.com/manual/zh/ffi.cdef.php) - 创建一个新的FFI对象
* [FFI::free](http://php.p2hp.com/manual/zh/ffi.free.php) - 释放非托管数据结构
* [FFI::load](http://php.p2hp.com/manual/zh/ffi.load.php) - 从C头文件加载C声明
* [FFI::memcmp](http://php.p2hp.com/manual/zh/ffi.memcmp.php) - 比较内存区域
* [FFI::memcpy](http://php.p2hp.com/manual/zh/ffi.memcpy.php) - 将一个内存区域复制到另一个内存区域
* [FFI::memset](http://php.p2hp.com/manual/zh/ffi.memset.php) - 填充内存区域
* [FFI::new](http://php.p2hp.com/manual/zh/ffi.new.php) - 创建C数据结构
* [FFI::scope](http://php.p2hp.com/manual/zh/ffi.scope.php) - 使用在预加载期间解析的C声明实例化FFI对象
* [FFI::sizeof](http://php.p2hp.com/manual/zh/ffi.sizeof.php) - 获取C数据或类型的大小
* [FFI::string](http://php.p2hp.com/manual/zh/ffi.string.php) - 从内存区域创建PHP字符串
* [FFI::type](http://php.p2hp.com/manual/zh/ffi.type.php) - 从C声明创建FFI\CType对象
* [FFI::typeof](http://php.p2hp.com/manual/zh/ffi.typeof.php) - 获取FFI\CData的FFI\CType

:::
