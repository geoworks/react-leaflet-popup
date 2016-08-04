React Leaflet Popup
==============
Замена обычному L.Popup с поддержкой рендеринга через Реакт.
------------------------------------------------------------
Работает в трёх режимах:
1.  Обычный L.Popup без изменения поведения;
2.  Использование уже подготовленного Реакт-элемента;
3.  Использование Реакт-компонента с заданием свойств;

Как использовать?
1.  Режим обычного Popup - использовать как обычно -
    Popup.setContent устанавливает HTML или DOM-элемент.
2.  С подготовленным Реакт-элементом
    При создании задать в options.reactElement корректный Реакт-элемент.
    При необходимости обновления вызвать setContent с новым Реакт-элементом.
3.  С Реакт-компонентом (думаю, это самый рабочий вариант)
    При создании задать в options.reactComponent корректный Реакт-компонент,
    а в options.reactComponentProps - свойства, которые будут переданы в компонент.
    Также в свойства будет добавлено свойство "leafletLayer" - source-объект Попапа.
    Пример:

    ```js
    var ReactPopup = require('./react-popup');
    var MyPopupComponent = require('./components/my-popup') // .jsx
    map.on('click', function (e) {
       map.openPopup(ReactPopup({
           reactComponent: MyPopupComponent,
           reactComponentProps: { data: someFeature.properties }
       }).setLatLng(e.latlng));
    });
    ```
В режимах 2 и 3 реакт рендерится в элемент wrapper (см. DOM-структуру Попапа),
который оборачивает содержимое. То есть основная структура и кнопка "закрыть" в
этой версии находятся вне компонента. При закрытии Попапа, перед уничтожением,
теоретически должна быть корректно вызвана функция жизненного цикла Реакт-компонента
"componentWillUnmount".
После инициализации компонента предполагается, что режим его работы менятся не будет.


How to run the example
----------------------

```sh
git clone https://github.com/burmisov/react-redux-leaflet
cd react-redux-leaflet
npm install
npm run example
```

Open [http://localhost:3000](http://localhost:3000)
