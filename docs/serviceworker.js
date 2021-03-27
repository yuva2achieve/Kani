console.log("This is service worker talking");

const filesToCache = 
`index.html
index.html.br
index.html.gz
manifest.json
manifest.json.br
manifest.json.gz
serviceworker.js
serviceworker.js.br
serviceworker.js.gz
css/site.css
css/site.css.br
css/site.css.gz
css/bootstrap/bootstrap.min.css
css/bootstrap/bootstrap.min.css.br
css/bootstrap/bootstrap.min.css.gz
css/bootstrap/bootstrap.min.css.map
css/bootstrap/bootstrap.min.css.map.br
css/bootstrap/bootstrap.min.css.map.gz
css/open-iconic/FONT-LICENSE
css/open-iconic/FONT-LICENSE.br
css/open-iconic/FONT-LICENSE.gz
css/open-iconic/ICON-LICENSE
css/open-iconic/ICON-LICENSE.br
css/open-iconic/ICON-LICENSE.gz
css/open-iconic/README.md
css/open-iconic/README.md.br
css/open-iconic/README.md.gz
css/open-iconic/font/css/open-iconic-bootstrap.min.css
css/open-iconic/font/css/open-iconic-bootstrap.min.css.br
css/open-iconic/font/css/open-iconic-bootstrap.min.css.gz
css/open-iconic/font/fonts/open-iconic.eot
css/open-iconic/font/fonts/open-iconic.eot.br
css/open-iconic/font/fonts/open-iconic.eot.gz
css/open-iconic/font/fonts/open-iconic.otf
css/open-iconic/font/fonts/open-iconic.otf.br
css/open-iconic/font/fonts/open-iconic.otf.gz
css/open-iconic/font/fonts/open-iconic.svg
css/open-iconic/font/fonts/open-iconic.svg.br
css/open-iconic/font/fonts/open-iconic.svg.gz
css/open-iconic/font/fonts/open-iconic.ttf
css/open-iconic/font/fonts/open-iconic.ttf.br
css/open-iconic/font/fonts/open-iconic.ttf.gz
css/open-iconic/font/fonts/open-iconic.woff
css/open-iconic/font/fonts/open-iconic.woff.br
css/open-iconic/font/fonts/open-iconic.woff.gz
images/kani192x192.png
images/kani192x192.png.br
images/kani192x192.png.gz
images/kani512x512.png
images/kani512x512.png.br
images/kani512x512.png.gz
js/main.js
js/main.js.br
js/main.js.gz
_framework/blazor.boot.json
_framework/blazor.boot.json.br
_framework/blazor.boot.json.gz
_framework/blazor.webassembly.js
_framework/blazor.webassembly.js.br
_framework/blazor.webassembly.js.gz
_framework/dnlib.dll
_framework/dnlib.dll.br
_framework/dnlib.dll.gz
_framework/dnSpy.Contracts.Logic.dll
_framework/dnSpy.Contracts.Logic.dll.br
_framework/dnSpy.Contracts.Logic.dll.gz
_framework/dnSpy.Contracts.Logic.xml
_framework/dnSpy.Contracts.Logic.xml.br
_framework/dnSpy.Contracts.Logic.xml.gz
_framework/dnSpy.Decompiler.dll
_framework/dnSpy.Decompiler.dll.br
_framework/dnSpy.Decompiler.dll.gz
_framework/dnSpy.Decompiler.ILSpy.Core.dll
_framework/dnSpy.Decompiler.ILSpy.Core.dll.br
_framework/dnSpy.Decompiler.ILSpy.Core.dll.gz
_framework/dotnet.5.0.4.js
_framework/dotnet.5.0.4.js.br
_framework/dotnet.5.0.4.js.gz
_framework/dotnet.timezones.blat
_framework/dotnet.timezones.blat.br
_framework/dotnet.timezones.blat.gz
_framework/dotnet.wasm
_framework/dotnet.wasm.br
_framework/dotnet.wasm.gz
_framework/ICSharpCode.Decompiler.dll
_framework/ICSharpCode.Decompiler.dll.br
_framework/ICSharpCode.Decompiler.dll.gz
_framework/ICSharpCode.NRefactory.CSharp.dll
_framework/ICSharpCode.NRefactory.CSharp.dll.br
_framework/ICSharpCode.NRefactory.CSharp.dll.gz
_framework/ICSharpCode.NRefactory.dll
_framework/ICSharpCode.NRefactory.dll.br
_framework/ICSharpCode.NRefactory.dll.gz
_framework/ICSharpCode.NRefactory.VB.dll
_framework/ICSharpCode.NRefactory.VB.dll.br
_framework/ICSharpCode.NRefactory.VB.dll.gz
_framework/icudt.dat
_framework/icudt.dat.br
_framework/icudt.dat.gz
_framework/icudt_CJK.dat
_framework/icudt_CJK.dat.br
_framework/icudt_CJK.dat.gz
_framework/icudt_EFIGS.dat
_framework/icudt_EFIGS.dat.br
_framework/icudt_EFIGS.dat.gz
_framework/icudt_no_CJK.dat
_framework/icudt_no_CJK.dat.br
_framework/icudt_no_CJK.dat.gz
_framework/Kani.dll
_framework/Kani.dll.br
_framework/Kani.dll.gz
_framework/Microsoft.AspNetCore.Components.dll
_framework/Microsoft.AspNetCore.Components.dll.br
_framework/Microsoft.AspNetCore.Components.dll.gz
_framework/Microsoft.AspNetCore.Components.Web.dll
_framework/Microsoft.AspNetCore.Components.Web.dll.br
_framework/Microsoft.AspNetCore.Components.Web.dll.gz
_framework/Microsoft.AspNetCore.Components.WebAssembly.dll
_framework/Microsoft.AspNetCore.Components.WebAssembly.dll.br
_framework/Microsoft.AspNetCore.Components.WebAssembly.dll.gz
_framework/Microsoft.Extensions.Configuration.Abstractions.dll
_framework/Microsoft.Extensions.Configuration.Abstractions.dll.br
_framework/Microsoft.Extensions.Configuration.Abstractions.dll.gz
_framework/Microsoft.Extensions.Configuration.dll
_framework/Microsoft.Extensions.Configuration.dll.br
_framework/Microsoft.Extensions.Configuration.dll.gz
_framework/Microsoft.Extensions.Configuration.Json.dll
_framework/Microsoft.Extensions.Configuration.Json.dll.br
_framework/Microsoft.Extensions.Configuration.Json.dll.gz
_framework/Microsoft.Extensions.DependencyInjection.Abstractions.dll
_framework/Microsoft.Extensions.DependencyInjection.Abstractions.dll.br
_framework/Microsoft.Extensions.DependencyInjection.Abstractions.dll.gz
_framework/Microsoft.Extensions.DependencyInjection.dll
_framework/Microsoft.Extensions.DependencyInjection.dll.br
_framework/Microsoft.Extensions.DependencyInjection.dll.gz
_framework/Microsoft.Extensions.Logging.Abstractions.dll
_framework/Microsoft.Extensions.Logging.Abstractions.dll.br
_framework/Microsoft.Extensions.Logging.Abstractions.dll.gz
_framework/Microsoft.Extensions.Logging.dll
_framework/Microsoft.Extensions.Logging.dll.br
_framework/Microsoft.Extensions.Logging.dll.gz
_framework/Microsoft.Extensions.Options.dll
_framework/Microsoft.Extensions.Options.dll.br
_framework/Microsoft.Extensions.Options.dll.gz
_framework/Microsoft.Extensions.Primitives.dll
_framework/Microsoft.Extensions.Primitives.dll.br
_framework/Microsoft.Extensions.Primitives.dll.gz
_framework/Microsoft.JSInterop.dll
_framework/Microsoft.JSInterop.dll.br
_framework/Microsoft.JSInterop.dll.gz
_framework/Microsoft.JSInterop.WebAssembly.dll
_framework/Microsoft.JSInterop.WebAssembly.dll.br
_framework/Microsoft.JSInterop.WebAssembly.dll.gz
_framework/System.Collections.Concurrent.dll
_framework/System.Collections.Concurrent.dll.br
_framework/System.Collections.Concurrent.dll.gz
_framework/System.Collections.dll
_framework/System.Collections.dll.br
_framework/System.Collections.dll.gz
_framework/System.Collections.Immutable.dll
_framework/System.Collections.Immutable.dll.br
_framework/System.Collections.Immutable.dll.gz
_framework/System.Collections.NonGeneric.dll
_framework/System.Collections.NonGeneric.dll.br
_framework/System.Collections.NonGeneric.dll.gz
_framework/System.ComponentModel.dll
_framework/System.ComponentModel.dll.br
_framework/System.ComponentModel.dll.gz
_framework/System.ComponentModel.Primitives.dll
_framework/System.ComponentModel.Primitives.dll.br
_framework/System.ComponentModel.Primitives.dll.gz
_framework/System.ComponentModel.TypeConverter.dll
_framework/System.ComponentModel.TypeConverter.dll.br
_framework/System.ComponentModel.TypeConverter.dll.gz
_framework/System.Console.dll
_framework/System.Console.dll.br
_framework/System.Console.dll.gz
_framework/System.Diagnostics.Process.dll
_framework/System.Diagnostics.Process.dll.br
_framework/System.Diagnostics.Process.dll.gz
_framework/System.Diagnostics.StackTrace.dll
_framework/System.Diagnostics.StackTrace.dll.br
_framework/System.Diagnostics.StackTrace.dll.gz
_framework/System.IO.Compression.dll
_framework/System.IO.Compression.dll.br
_framework/System.IO.Compression.dll.gz
_framework/System.IO.FileSystem.dll
_framework/System.IO.FileSystem.dll.br
_framework/System.IO.FileSystem.dll.gz
_framework/System.IO.Pipelines.dll
_framework/System.IO.Pipelines.dll.br
_framework/System.IO.Pipelines.dll.gz
_framework/System.Linq.dll
_framework/System.Linq.dll.br
_framework/System.Linq.dll.gz
_framework/System.Linq.Expressions.dll
_framework/System.Linq.Expressions.dll.br
_framework/System.Linq.Expressions.dll.gz
_framework/System.Memory.dll
_framework/System.Memory.dll.br
_framework/System.Memory.dll.gz
_framework/System.Net.Http.dll
_framework/System.Net.Http.dll.br
_framework/System.Net.Http.dll.gz
_framework/System.Net.Primitives.dll
_framework/System.Net.Primitives.dll.br
_framework/System.Net.Primitives.dll.gz
_framework/System.ObjectModel.dll
_framework/System.ObjectModel.dll.br
_framework/System.ObjectModel.dll.gz
_framework/System.Private.CoreLib.dll
_framework/System.Private.CoreLib.dll.br
_framework/System.Private.CoreLib.dll.gz
_framework/System.Private.Runtime.InteropServices.JavaScript.dll
_framework/System.Private.Runtime.InteropServices.JavaScript.dll.br
_framework/System.Private.Runtime.InteropServices.JavaScript.dll.gz
_framework/System.Private.Uri.dll
_framework/System.Private.Uri.dll.br
_framework/System.Private.Uri.dll.gz
_framework/System.Private.Xml.dll
_framework/System.Private.Xml.dll.br
_framework/System.Private.Xml.dll.gz
_framework/System.Private.Xml.Linq.dll
_framework/System.Private.Xml.Linq.dll.br
_framework/System.Private.Xml.Linq.dll.gz
_framework/System.Runtime.CompilerServices.Unsafe.dll
_framework/System.Runtime.CompilerServices.Unsafe.dll.br
_framework/System.Runtime.CompilerServices.Unsafe.dll.gz
_framework/System.Runtime.InteropServices.dll
_framework/System.Runtime.InteropServices.dll.br
_framework/System.Runtime.InteropServices.dll.gz
_framework/System.Runtime.InteropServices.RuntimeInformation.dll
_framework/System.Runtime.InteropServices.RuntimeInformation.dll.br
_framework/System.Runtime.InteropServices.RuntimeInformation.dll.gz
_framework/System.Runtime.Serialization.Formatters.dll
_framework/System.Runtime.Serialization.Formatters.dll.br
_framework/System.Runtime.Serialization.Formatters.dll.gz
_framework/System.Security.Cryptography.Algorithms.dll
_framework/System.Security.Cryptography.Algorithms.dll.br
_framework/System.Security.Cryptography.Algorithms.dll.gz
_framework/System.Security.Cryptography.Primitives.dll
_framework/System.Security.Cryptography.Primitives.dll.br
_framework/System.Security.Cryptography.Primitives.dll.gz
_framework/System.Text.Encodings.Web.dll
_framework/System.Text.Encodings.Web.dll.br
_framework/System.Text.Encodings.Web.dll.gz
_framework/System.Text.Json.dll
_framework/System.Text.Json.dll.br
_framework/System.Text.Json.dll.gz
_framework/System.Text.RegularExpressions.dll
_framework/System.Text.RegularExpressions.dll.br
_framework/System.Text.RegularExpressions.dll.gz
_framework/System.Threading.Tasks.Parallel.dll
_framework/System.Threading.Tasks.Parallel.dll.br
_framework/System.Threading.Tasks.Parallel.dll.gz
_framework/de/dnSpy.Contracts.Logic.resources.dll
_framework/de/dnSpy.Contracts.Logic.resources.dll.br
_framework/de/dnSpy.Contracts.Logic.resources.dll.gz
_framework/es-ES/dnSpy.Contracts.Logic.resources.dll
_framework/es-ES/dnSpy.Contracts.Logic.resources.dll.br
_framework/es-ES/dnSpy.Contracts.Logic.resources.dll.gz
_framework/fa/dnSpy.Contracts.Logic.resources.dll
_framework/fa/dnSpy.Contracts.Logic.resources.dll.br
_framework/fa/dnSpy.Contracts.Logic.resources.dll.gz
_framework/fr/dnSpy.Contracts.Logic.resources.dll
_framework/fr/dnSpy.Contracts.Logic.resources.dll.br
_framework/fr/dnSpy.Contracts.Logic.resources.dll.gz
_framework/hu/dnSpy.Contracts.Logic.resources.dll
_framework/hu/dnSpy.Contracts.Logic.resources.dll.br
_framework/hu/dnSpy.Contracts.Logic.resources.dll.gz
_framework/it/dnSpy.Contracts.Logic.resources.dll
_framework/it/dnSpy.Contracts.Logic.resources.dll.br
_framework/it/dnSpy.Contracts.Logic.resources.dll.gz
_framework/pt-PT/dnSpy.Contracts.Logic.resources.dll
_framework/pt-PT/dnSpy.Contracts.Logic.resources.dll.br
_framework/pt-PT/dnSpy.Contracts.Logic.resources.dll.gz
_framework/ru/dnSpy.Contracts.Logic.resources.dll
_framework/ru/dnSpy.Contracts.Logic.resources.dll.br
_framework/ru/dnSpy.Contracts.Logic.resources.dll.gz
_framework/tr/dnSpy.Contracts.Logic.resources.dll
_framework/tr/dnSpy.Contracts.Logic.resources.dll.br
_framework/tr/dnSpy.Contracts.Logic.resources.dll.gz
_framework/uk/dnSpy.Contracts.Logic.resources.dll
_framework/uk/dnSpy.Contracts.Logic.resources.dll.br
_framework/uk/dnSpy.Contracts.Logic.resources.dll.gz
_framework/zh-CN/dnSpy.Contracts.Logic.resources.dll
_framework/zh-CN/dnSpy.Contracts.Logic.resources.dll.br
_framework/zh-CN/dnSpy.Contracts.Logic.resources.dll.gz`
;

const cacheName = 'Kani-pwa';
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache.split('\n'));
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});