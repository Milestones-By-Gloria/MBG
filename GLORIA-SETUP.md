# How to view the Milestones by Gloria website on your computer

These instructions show you how to download the website code and open it in your browser. You only need to do the "first-time" steps once.

---

## Step 1 — Install these two programs (only once, ever)

1. **Git** — go to https://git-scm.com/download/win and install it.
2. **Node.js** — go to https://nodejs.org and install the green "LTS" version.

Click "Next" through both installers, accepting all the default options. **Restart your computer when both are installed.**

---

## Step 2 — Open a terminal

- **Windows:** press the Start button, type `PowerShell`, press Enter.
- **Mac:** press ⌘ + Space, type `Terminal`, press Enter.

A dark window will open. This is where you type the commands below.

---

## Step 3 — First-time download of the website (only once)

Copy and paste each command below into the terminal, **one at a time**. Press Enter after each one. Wait until you see the prompt blink again before doing the next.

```
cd Documents
```

```
git clone https://github.com/Milestones-By-Gloria/MBG.git
```

```
cd MBG\site
```

```
npm install
```

The last command takes 1–3 minutes. It's downloading parts the website needs. You'll see lots of text scroll by — that's normal.

---

## Step 4 — Switch to the new rebrand version

```
git checkout rebrand
```

---

## Step 5 — Start the website

```
npm run dev
```

You'll see some text, ending with a line like `Local: http://localhost:4321/`.

Open your web browser and go to:

**http://localhost:4321**

That's the website running on your own computer.

**To stop it:** click the terminal window and press `Ctrl` + `C`.

---

## Every time after that — viewing the latest version

Open the terminal again and run these commands one at a time:

```
cd Documents\MBG\site
```

```
git pull
```

```
npm run dev
```

Then open **http://localhost:4321** in your browser.

---

## If something goes wrong

Take a screenshot of the terminal window and send it to Thomas.
