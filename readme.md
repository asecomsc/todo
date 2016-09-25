Sin jquery es muy simple usar form/get, pero al hacer "button/submit" no se puede 
permanecer en la misma pagina.

Con jquery si se puede permanecer en la misma pagina, pero:
a) se debe usar "post" 
b) no usar <form></form>
c) 2nd parameter de $.post no debe ser opcional, debe llevar campos del formulario en json.
d) para procesar "post" en node se necesita usar, npm body-parser
y poder tener acceso a los campos del formulario con la sig instruccion: 
var miVar = req.body.formField;


BIBLIOGRAFIA
goo: jquery body-parser
https://codeforgeek.com/2014/09/handle-get-post-request-express-4/
