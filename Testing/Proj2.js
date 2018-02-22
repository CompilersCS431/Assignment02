Package Project2;

Helpers
            digit = ['0'..'9'];
            lf = 10; 
            sp = ' ';
			letter = [['a' .. 'z'] + ['A' .. 'Z']];
Tokens
            if = 'if';
			class = 'class';
			public = 'public';
			static = 'static';
			void = 'void';
			main = 'main';
			extends = 'extends';
			return = 'return';
			int = 'int';
			boolean = 'boolean';
			while = 'while';
			else = 'else';
			true = 'true';
			false = 'false';
			this = 'this';
			new = 'new';
			lcurly = '{';
			rcurly = '}';
			lparen = '(';
			rparen = ')';
			semicolon = ';';
			period = '.';
			lbracket = '[';
			rbracket = ']';
			comma = ',';
			excl = '!';
			star = '*';
			plus = '+';
			identifier = letter+ (letter | digit)*;
			blank = sp+;
Ignored Tokens
			blank
;
