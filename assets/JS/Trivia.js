let timerRunning = false;
let wrongs = 0, rights = 0, totalQs = 5;
let secRemaining = 45;
let timeInterval = 1000;

function initializeGame()
{
    timerRunning = false;
    wrongs = 0, rights = 0, totalQs = 5;
    secRemaining = 45;
    mainGameFunc();
}

function mainGameFunc()
{
    showTime();
    $("#main").html(scoreboard);
    startTimer();
}

function scoreboard()
{
    return `<H2>TIMED TRIVIA TIME!</h2><b>Goal:</b>
    Gain points via correct guesses.
    <BR><BR>
    Don't gain points via wrong guesses!
    <BR><BR>
    
    <b>Instructions:</b>
    Click the radio button to the left of each of your answers.
    <BR><BR>
    <form>
        <fieldset>
            <legend>Who was the first US President to be put on trial to be impeached?</legend>
            <div>
                <input type="radio" id="BillClinton" name="impeachable" checked/>
                <label for="BillClinton">Bill Clinton</label>
                <input type="radio" id="Andrew Johnson" name="impeachable" value="correct"/>
                <label for="Andrew Johnson">Andrew Johnson</label>
                <input type="radio" id="GroverCleveland" name="impeachable"/>
                <label for="GroverCleveland">Grover Cleveland</label>
                <input type="radio" id="DonaldTrump" name="impeachable"/>
                <label for="DonaldTrump">Donald Trump</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>Who likes big butts and cannot lie?</legend>
            <div>
                <input type="radio" id="JohnCoulton" name="butts" value="correct" checked/>
                <label for="JohnCoulton">John Coulton</label>
                <input type="radio" id="BarackObama" name="butts"/>
                <label for="BarackObama">Barack Obama</label>
                <input type="radio" id="DonMcClean" name="butts"/>
                <label for="DonMcClean">Don McClean</label>
                <input type="radio" id="JenniferLopez" name="butts"/>
                <label for="JenniferLopez">Jennifer Lopez</label>
            </div>
        </fieldset>
        <fieldset>
        <legend>As of August 1, 2018, which of these intellectual properties has grossed the most USD?</legend>
            <div>
                <input type="radio" id="MickeyMouse" name="USD" checked/>
                <label for="MickeyMouse">Mickey Mouse</label>
                <input type="radio" id="HarryPotter" name="USD"/>
                <label for="HarryPotter">Harry Potter</label>
                <input type="radio" id="StarWars" name="USD"/>
                <label for="StarWars">Star Wars</label>
                <input type="radio" id="Pokemon" name="USD" value="correct"/>
                <label for="Pokemon">Pokemon</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>What can users do at Zombo.com?</legend>
            <div>
                <input type="radio" id="PurchaseMerchandise" name="zombo" checked/>
                <label for="PurchaseMerchandise">Purchase Merchandise</label>
                <input type="radio" id="PlayVideoGames" name="zombo"/>
                <label for="PlayVideoGames">Play Video Games</label>
                <input type="radio" id="WatchTVShows" name="zombo"/>
                <label for="WatchTVShows">Watch TV Shows</label>
                <input type="radio" id="Anything" name="zombo" value="correct"/>
                <label for="Anything">Anything</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>In Christianity, how is humanity made righteous before God?</legend>
            <div>
                <input type="radio" id="HumanEffort" name="righteous" checked/>
                <label for="Human Effort">Human Effort</label>
                <input type="radio" id="AcceptingTheSacrificeOfChrist" name="righteous" value="correct"/>
                <label for="AcceptingTheSacrificeOfChrist">Accepting the Sacrifice of Christ</label>
            </div>
        </fieldset>
    </form>`;
}

function startTimer()
{
  if(!timerRunning)
  {
    timeInterval = setInterval(countdown, 1000);
    timerRunning = true;
  }
}

function showTime()
{
    $("#showtime").html("<h2>Sec Remaining: " + secRemaining + " </h2>");
}

function countdown()
{
  secRemaining--;

  showTime();

  if (secRemaining <= 0)
  {
    gameOver();
  }
}

function stopCountdown()
{
  if(timerRunning)
  {
    secRemaining = 0;
    clearInterval(timeInterval);
    timerRunning = false;
  }
}

function answerChecker()
{
    if(secRemaining <= 0)
    {
        if(document.getElementById("Andrew Johnson").checked)
        {
            rights++;
        }
        if(document.getElementById("JohnCoulton").checked)
        {
            rights++;
        }
        if(document.getElementById("Pokemon").checked)
        {
            rights++;
        }
        if(document.getElementById("Anything").checked)
        {
            rights++;
        }
        if(document.getElementById("AcceptingTheSacrificeOfChrist").checked)
        {
            rights++;
        }
    }
    
    wrongs = totalQs - rights;

    alert("Game Over!\nWrong: " + wrongs + ", Right: " + rights);   
}

function gameOver()
{
    stopCountdown();
    answerChecker();
    initializeGame();
}

// Start the game loop!
initializeGame();