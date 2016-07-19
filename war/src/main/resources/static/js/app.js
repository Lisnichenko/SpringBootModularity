/**
 * Created by Kmarkovych on 13-Jul-16.
 */
const servicesUrl = "/services";
const orderUrl = "/order";
const addItemUrl = orderUrl + "/additem";
const itemListUrl = "/item";

//Add item to order
const addItemClickHandler = function () {
    $("a.order-item").click(function (e) {
        $("#orderedAmount").text("...")
        var popID = $(this).attr('rel');
        $.get(addItemUrl, {"itemid": popID}, function (data) {
            $("#orderedAmount").text(data.total)
        });
        e.preventDefault();
    });
};

//Fill cart on load
const fillCart = function () {
    $.post(orderUrl, null, function (data) {
        const total = data.total;
        if(total > 0) {
            $("#orderedAmount").text(total)
        }

        data.items.sort();

    });
}


//Creates teplate for each item
const createItemView = function (item) {
    var root = document.createElement("div");
    root.className = "templatemo_pizza_box";

    var img = document.createElement("img");
    img.alt = "Pizza";
    img.src = "images/templatemo_pizza.jpg";
    root.appendChild(img);

    var textBox = document.createElement("div");
    textBox.className = "textbox";

    var a = document.createElement("a");
    a.className = "order-item";
    a.href = addItemUrl;
    a.rel = item.id;
    a.shape = "rect";
    a.innerHTML = item.description;
    textBox.appendChild(a);
    root.appendChild(textBox);

    return root;
}

//Fill items
const fillItemListDeffered = $.post(itemListUrl, null, function (data) {
    var itemsContainer = $("#templatemo_content_left");
    $.each(data, function (i, item) {
        itemsContainer.append(createItemView(item));
    })
});


var fillMenu = function () {
    var menuContainer = $("#templatemo_menu");
    $.post(servicesUrl, null, function(data){
        var ul = document.createElement("ul");
        $.each(data, function(i, item){
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = item.url;
            a.innerHTML = item.name;
            li.appendChild(a);
            ul.appendChild(li);
        })
        menuContainer.empty().append(ul);
    })
};
$(document).ready(function () {
    fillMenu();
    $.when(fillItemListDeffered).done(addItemClickHandler);
    fillCart();
});
