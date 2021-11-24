# msxbasic-vscode

Microsoft BASIC (MSX) syntax highlighting for Visual Studio Code.

Supports all reserved words from the MSX Basic.

## Comandos adicionados
```Comando para criar um template (skel)```

## Snippets adicionados
- For Loops: Simple, Step, Temp Integer
- If .. Then: Else variation too
- Inkey$: For keyboard input of a single char
## Standard MSX Basic

### Statements

```text
AUTO, BEEP, BLOAD, BSAVE, CALL, CIRCLE, CLEAR, CLOAD,
CLOSE, CLS, COLOR, CONT, CSAVE, CSRLIN, DATA, DEF, DEFFN, 
DEFINT, DEFSNG, DEFDBL, DEFSTR, DEFUSR, DELETE, DIM, DRAW,
END, ERASE, ERROR, FOR, NEXT, FRE, GOSUB, RETURN, GOTO, IF,
THEN, ESLE, INPUT, INPUT#, INPUT$, INTERVAL, ON, OFF,
KEY, LET, LINE, LIST, LLIST, LOAD, LOCATE, LPRINT, USING,
MAXFILES, MERGE, MOTOR, NEW, SPRITE, OPEN, OUT, PAINT,
POKE, PRESET, PRINT, PSET, PUT, READ, REM, RENUM, RESTORE,
RESUME, RUN, SAVE, SCREEN, SOUND, SPRITE$, STOP, STRIG,
SWAP, TIME, TROFF, TRON, VDP, VPOKE, WAIT, WIDTH
```

### Functions

```text
ABS, ASC, ATN, BASE, BIN$, CDBL, CHR$, CINT, COS, CSNG,
EOF, ERL, ERR, EXP, FIX, HEX$, INKEY$, INP, INSTR, INT,
LEFT$, LEN, LOG, LPOS, MID$, OCT$, PAD, PDL, PEEK, POINT,
POS, RIGHT$, RND, SGN, SPACE$, SPC, SQL, STICK, STR$, 
STRING$, TAB, TAN, USR, VAL, VARPTR, VPEEK
```

### Operators

```text
AND, NOT, OR, XOR
```

### Other reserved words

```text
CMD
```

## MSX Disk BASIC

### Statements

```text
COPY, CVI, CVS, CVD, DSKF, DSKI$, DSKO$, EOF, FIELD, FILES, 
FORMAT, GET, KILL, LOC, LOF, LSET, MKI$, MKS$, MKD$, NAME,
RESET, SYSTEM
```
## MSX BASIC Dignified

### Statements

```text
DEFINE, DECLARE, INCLUDE
```
## Installation

Launch VS Code Quick Open (**Ctrl+P**), paste the following commnand, and press Enter.

```vscode
ext install msxbasic
```

## Notes
The target is to use with MSX Basic Diginified, as at this point the commands without spaces do not work correctly.

Coming soon:
compilation via MSX Basic Dignified
use of Turbo Basic
use of MSXBAS2ROM
floppy image generation
emulator startup

## Acknowledgments

- To ***jsanjose*** / ZX-Basic project, which was the basis of this project. (https://github.com/jsanjose/zxbasic-vscode)
- To ***farique1*** / MSX Basic Dignified, whith was a great tool for MSX Basic programmers. (https://github.com/farique1/msx-basic-dignified)