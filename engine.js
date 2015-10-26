window.onload = function()
{
    init();
    //Как только скрипт загрузится, вызываем функцию инициализации
}

function init()
{
    canvas = document.getElementById('gameField');
    // Get canvas
    canvas.width = 600;
    canvas.height = 230;

    canvasContext = canvas.getContext("2d");
    // Context for draw

    bg = new gameBackground();
    // Работа с фоном игры.

    player = new gamePlayer();
    // Работа с игроком

    gameIteration = 0;

    block = new Array();
    block[gameIteration] = new createObstacle();
    // Препятствия

    setInterval(gameUpdate, 5);
    // Интервал обновления.
}

function gameBackground()
{
    this.draw = function draw()
    {
        canvasContext.fillStyle = "#000";
        canvasContext.fillRect(0, 0, 600, 230);
        // Рисуем чёрный фон
    }
}

function gamePlayer()
{
    this.x = 10;
    // Координата X
    this.y = 115;
    // Координата Y

    this.draw = function()
    {
        canvasContext.fillStyle = "#FFF";
        canvasContext.fillRect(this.x, this.y, 27, 110);
        // Рисуем игрока
    }
}

function createObstacle()
{
    this.w = 50;
    this.h = 50;
    this.x = 540;
    this.padding = 0;
    // Рандомный отступ

    this.draw = function()
    {
        canvasContext.fillStyle = "#FFF";
        canvasContext.fillRect(this.x + this.padding, 175, this.w, this.h);
    }
}

function gameUpdate()
{
    bg.draw();
    // Отрисовываем фон
    player.draw();
    // Отрисовываем игрока
    for(i = 0; i < block.length; i++)
    {
        block[i].draw();
    }
    // Отрисовка предпятсвий

    valueUpdate();
}

function valueUpdate()
{
    for(i = 0; i < block.length; i++)
    {
        --block[i].x;
    }

    if(block[gameIteration].x == 200)
    {
        console.log("Pre:" + gameIteration);
        ++gameIteration;
        block[gameIteration] = new createObstacle();
        // Препятствия
        console.log("Current:" + gameIteration);
    }
}
