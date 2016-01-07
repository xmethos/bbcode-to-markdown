var convert = require('./bbcode-to-markdown');

var strings = [
	'[b]BAA [/b]',
	'[red]BAA <br><br><br> AM!![/red]',
    '[spoiler yo=dawg]BAAAM!![/spoiler]',
    '[quote author=Luke Larris link=topic=2835.msg20559#msg20559 date=1405282198]<br />test<br />[/quote]<br /><br />hey!',
    '[abbr="a.k.a."]Unknown W. Brackets[/abbr]',
    'Here is some text in the default direction and<br> [bdo=rtl]Here is some right-to-left text[/bdo]',
    '[blue]text or more BB Code[/blue]',
    '[center]blocks, text or more BB Code[/center]',
    '[color=fuchsia]text or more BB Code[/color]',
    '[flash=200, 200]http://somefile.swf[/flash]',
    '[green]text or more BB Code[/green]',
    '[hr]',
    '[img width=30]http:⁄⁄wiki.simplemachines.org/smf/images/1/19/Button_media.png[/img]',
    '[left]blocks, text or more BB Code[/left]',
    '[list type=lower-greek] [li]list item (see <a href="http://wiki.simplemachines.org/smf/Li" title="Li">li</a>)[/li] [li]another list item[/li] [/list]',
    '[me=username]does an action[/me]',
    '[nobbc][b]BB Code[/b][/nobbc]',
    '[pre]example pre[/pre]',
    '[code]example code[/code]',
    '[code lang=javascript]example code[/code]',
    '[code lang=javascript code=inline]example code[/code]',
    '[red]text or more BB Code[/red]',
    '[rtl]blocks, text or more BB Code![/rtl]',
    '[shadow=red,left]Hello[/shadow]',
    'normal[sub]subscript[/sub]',
    '[table]<br>&nbsp;[tr][td]text[/td][td]or more[/td][/tr]<br>&nbsp;[tr][td]BB[/td][td]Code[/td][/tr]<br>[/table]',
    '[time]1132812640[/time]',
    '[tt]text or more BB Code[/tt]',
    '[url]http://www.bbcode.org/[/url]',
    '[url=http://www.bbcode.org/]This be bbcode.org![/url]',
	'[anchor=http://www.bbcode.org]text or more BB Code[/anchor];',
	'[ftp=ftp://somedomain.com]text or more BB Code[/ftp], [ftp]ftp://somedomain.com[/ftp]',
	'[b][url=http://www.example.com/example.mov]Foo Bar Zee (77.77MB)[/url][/b]',
	'A mathematical range breaks document <3, 5]\nThis text will be lost',
	'[list type=lower-greek]\n[li]list item (see [url=http://wiki.simplemachines.org/smf/Li]Text[/url])[/li]\n[li]another list item[/li]\n[li][b]another list item[/b][/li]\n[/list]',
	'[php] <?php echo "hai" ?> [/php]',
	'[code] php echo "hai" [/code]'

];

strings.forEach(function(str, i) {
    console.log('===TEST-' + i +'===\n');
    console.log('RAW:\n' +  str + '\n');
    console.log('HTML:\n' +  convert.bbcodeToHTML(str) + '\n\n');
	console.log('MD:\n' +  convert.bbcodeToMarkdown(str) + '\n\n');
});