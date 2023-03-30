# Map 객체

Map 객체는 Object와 매우 유사하다.  
key와 value를 맵핑시켜 값을 저장하며 저장된 순서대로 요소에 접근할 수 있다.

### Map 생성

```jsx
let map = new Map();
```

Map 객체 생성은 `new Map()` 생성자를 사용한다.

### Map.set()

Map 객체에 데이터를 저장할 때는 `parameter`로 key와 value를 이용한다.

```jsx
map.set("name", "chan");
map.set("age", 30);
map.set("email", "chan@gmail.com");
map.set("phone", true);
map.size; // 4
```

<!-- ![set](https://cdn.discordapp.com/attachments/1037267111585792020/1091041778540482680/2023-03-31_1.50.02.png) -->
<img src="https://cdn.discordapp.com/attachments/1037267111585792020/1091041778540482680/2023-03-31_1.50.02.png" width="450px">

### Map.get()

Map 객체에 저장된 데이터를 읽을 때는 `get()` 함수에 `parameter`로 얻고자 하는 값의 key를 전달한다.

```jsx
map.get("name"); // chan
map.get("age"); // 30
map.get("email"); // chan@gmail.com
map.get("phone"); // true
```

![get](https://cdn.discordapp.com/attachments/1037267111585792020/1091042762952015953/2023-03-31_1.54.17.png)

### Map.has()

Map 객체에 특정 key의 value가 저장되어 있는지 확인하려면 `has()` 함수를 사용한다.

```jsx
map.has("name"); // true
map.has("address"); // false
```

![has](https://cdn.discordapp.com/attachments/1037267111585792020/1091043670146429018/2023-03-31_1.57.52.png)

### Map.delete()

Map 객체에 저장되어 있는 특정 데이터를 삭제하려면 `delete()` 함수를 사용한다.

```jsx
map.delete("age"); // true
map.delete("address"); // false
```

Map 객체에 특정 데이터가 저장되어 있다면 true를 반환하고 없으면 false를 반환한다.

![delete](https://cdn.discordapp.com/attachments/1037267111585792020/1091044467236159518/2023-03-31_2.01.03.png)

### Map.forEach()

Map 객체에 저장되는 모든 데이터를 읽을 때는 `forEach()` 함수를 사용한다.

```jsx
map.forEach((m) => console.log(m));
```

![forEach](https://cdn.discordapp.com/attachments/1037267111585792020/1091045703696003132/2023-03-31_2.05.57.png)

### Map.clear()

Map 객체에 저장되어 있는 모든 데이터를 한번에 삭제하려면 `clear()` 함수를 사용한다.

```jsx
map.clear();
```

![clear](https://cdn.discordapp.com/attachments/1037267111585792020/1091045889419771924/2023-03-31_2.06.43.png)

---

📚 Map과 Object는 매우 유사하지만 몇 가지 차이점이 있다.

-   Object의 경우 key로 문자열만 사용할 수 있지만 Map은 key로 어떤 타입이든 가능하다.  
    ![map](https://cdn.discordapp.com/attachments/1037267111585792020/1091046999844991106/2023-03-31_2.11.07.png)
    ```jsx
    map.set({ a: 1 }, true);
    ```
    `{a:1}` 의 key는 단적인 예시지만 key로 지정되고 Object로 지정된다.
-   Object는 몇 개의 데이터가 담겼는지 수동적으로 계산해야 하는데 Map은 size 속성을 통해 크기를 쉽게 알 수 있다.
-   Object는 저장된 데이터를 `for-in` 반복문으로 읽었을 때 데이터를 저장한 순서대로 읽는다고 보장할 수 없지만 Map은 데이터를 저장한 순서를 보장한다.
