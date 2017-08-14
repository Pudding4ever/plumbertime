///<reference path="_reference.ts"/>
namespace core {
    
        // declare a reference to the Preloader
        export let assets: createjs.LoadQueue;
    
        // declare textureAtlas
        export let textureAtlas: createjs.SpriteSheet;
    
        export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        export let ctx = CanvasRenderingContext2D.prototype = canvas.getContext("2d");
    
        export let stage: createjs.Stage;
    
        // score, lives, and collision
        export let score: number = 0;
        export let lives: number = 3;
    
        export let win: boolean = false;

        
    //Object pools for projectiles
    export var bullet_array: Array<objects.cBullet> = new Array<objects.cBullet>();
    
    
        //scene tracking
        export let currentScene: objects.Scene;
        export let scene: number;
    
        //Main title screen text labels/buttons
        let gameTitle: createjs.Text;
        let gameCredit: createjs.Text;
        let StartGame: GUI.Button;
        let Instructions: GUI.Button;
        let ExitGame: GUI.Button;
    
        // asset manifest for images and sounds
        let assetData: objects.Asset[] = [
            { id: "starfield", src: "Assets/images/starfield.gif" },
            { id: "nebula", src: "Assets/images/nebula.png" },
            { id: "player", src: "Assets/images/player.gif" },
            { id: "pstarfield", src: "Assets/images/parallaxstarfield.gif" },
            { id: "button", src: "Assets/images/button.png" },
            { id: "asteroidl", src: "Assets/images/asteroidl.png" },
            { id: "asteroidm", src: "Assets/images/asteroidm.png" },
            { id: "asteroids", src: "Assets/images/asteroids.png" },
            { id: "eship", src: "Assets/images/eship.png" },
            { id: "eship2", src: "Assets/images/eship2.png" },
            { id: "eship3", src: "Assets/images/eship3.png" },
            { id: "boss", src: "Assets/images/spacedragon.png" },
            { id: "help", src: "Assets/images/instructions.png" },
            { id: "explosion", src: "Assets/audio/explosion.wav" },
            { id: "hurt", src: "Assets/audio/hurt.wav" },
            { id: "pew", src: "Assets/audio/pew.wav" },
            { id: "music", src: "Assets/audio/music.mp3" },
            { id: "gameover", src: "Assets/audio/gameover.mp3" }
        ];
    
        //Game Scenes
        let start: scenes.play;
        let play: scenes.play;
        let play2: scenes.play;
        let play3: scenes.play;
        let die: scenes.play;
    
        //INPUT MANAGER        
        //?

        function preload(): void {
            assets = new createjs.LoadQueue(); // instantiates the loader
            assets.installPlugin(createjs.Sound);
            assets.loadManifest(assetData);
            assets.on("complete", init, this);
    
        }
    
        function init(): void {
    
            //SETUP INPUT MANAGER
            //Actual inputs are added when a player is added to the scene
            stage = new createjs.Stage(canvas);
            stage.enableMouseOver(20);
            createjs.Ticker.framerate = 60; //THE HUMAN EYE CAN'T PERCIEVE ALL THESE FRAMES!!111!1
            createjs.Ticker.on("tick", gameLoop);
            scene = config.scene.START;
            changeScene();
        }
    
        function gameLoop(): void {
            currentScene.Update();
            stage.update();
            //drawbullets();
            if(lives <= 0){
                scene = config.scene.DIE;
                changeScene();
            }
        }
        
export function changeScene(): void {
    
        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.scene.START:
                stage.removeAllChildren();
                start = new scenes.play();
                currentScene = start;
                break;
            // Show the PLAY Scene
            case config.scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.scene.DIE:
                stage.removeAllChildren();
                die = new scenes.play();
                currentScene = die;
                break;
            //Show level 2
            case config.scene.PLAY2:
                stage.removeAllChildren();
                play2 = new scenes.play();
                currentScene = play2;
                break;
            //Show level 3
            case config.scene.PLAY3:
                stage.removeAllChildren();
                play3 = new scenes.play();
                currentScene = play3;
                break;
        }
        
    }
    
    
    
    window.addEventListener("load", preload);

}