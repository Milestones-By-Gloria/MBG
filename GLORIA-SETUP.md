# How to view the Milestones by Gloria website on your computer

Every time you want to see the latest version of the site, follow these steps.

---

## Step 1 — Open the terminal

Press the Start button, type `PowerShell`, press Enter.

---

## Step 2 — Go to the project folder

```
cd C:\Users\User\Desktop\MBG\site
```

---

## Step 3 — Get the latest version of the code

```
git pull
```

---

## Step 4 — Switch branches (only if you want a different version)

To see the new rebrand version:
```
git checkout rebrand
```

To go back to the live version:
```
git checkout main
```

---

## Step 5 — Install new parts (only when Thomas says new packages were added)

```
npm install
```

This downloads any new pieces the website needs. It can take 1–3 minutes. You only need to run this when Thomas tells you a new package was added — otherwise skip it.

---

## Step 6 — Start the website

```
npm run dev
```

When it says `Local: http://localhost:4321/`, the website is running.

---

## Step 7 — View it in your browser

Open your browser and go to:

**http://localhost:4321**

That's the website running on your own computer.

---

## To stop the website

Click the terminal window and press `Ctrl` + `C`.

---

## If `npm` says "not recognized"

Run this once in PowerShell, type `Y` when asked, then close and reopen PowerShell:
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## If anything else goes wrong

Take a screenshot of the terminal window and send it to Thomas.
