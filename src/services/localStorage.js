export const getFavoriteCoins = () => {
    const data = localStorage.getItem("coins");
    if (data) {
        return JSON.parse(data);
    }
    return [];
};

export const setFavoriteCoin = (coin) => {
    const coins = getFavoriteCoins();
    coins.push(coin);
    localStorage.setItem("coins", JSON.stringify(coins));
}

export const removeFavoriteCoin = (coin) => {
    const coins = getFavoriteCoins();
    const updatedCoins = coins.filter((c) => c.id !== coin.id);
    localStorage.setItem("coins", JSON.stringify(updatedCoins));
}

  