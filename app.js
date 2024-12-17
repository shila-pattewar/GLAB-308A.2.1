const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    console.log(adventurer.inventory[0]);


    // create a loop that logs each item in Robin’s inventory.
    for ( i=0 ; i< adventurer.inventory.length ; i++)
        {
            console.log (adventurer.inventory[i]);
        }