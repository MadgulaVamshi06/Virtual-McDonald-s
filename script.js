const getSelectedItems = () => {
    event.preventDefault();
    let selectedFood;

    selectedFood = document.querySelectorAll(".food");
    let items = [];
    selectedFood.forEach((ele) => {
        if (ele.checked === true) {
            items.push(ele.value);
        }
    })
    console.log(items);
    orderFood(items)
}
let order = 202401;
const orderFood = async (items) => {
    setTimeout(() => {
        var orderedFood = document.querySelector("#order-item");
        var orderId = document.getElementById("order-id");
        orderId.textContent = `Order Id - ${order}`;
        orderedFood.innerHTML = "";
        const foodImagesContainer = document.getElementById("food-images");

        items.forEach((ele) => {
            var foodItemReceived = document.createElement("div");
            foodItemReceived.setAttribute("id", "food-item");
            const foodItem = document.createElement("p");
            orderedFood.append(foodItemReceived);
            foodItem.textContent = ele;
            foodItemReceived.append(foodItem);
            
            const foodImage = document.createElement("img");
            foodImage.src  =  `path/to/your/images/${item}.jpg`;
            foodImagesContainer.appendChild(foodImage);
            orderedFood.appendChild(foodImagesContainer);
        })
    }, 1000)
};
let form = document.getElementById("form");
form.addEventListener("submit", () => {
    getSelectedItems();
    order++;
});