"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3491],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],p={id:"configuration",title:"Configuration Options"},l=void 0,s={unversionedId:"configuration",id:"configuration",title:"Configuration Options",description:"Our tooling supports the following types of configuration:",source:"@site/../docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"Samson",lastUpdatedAt:1695900362,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{id:"configuration",title:"Configuration Options"},sidebar:"docs",previous:{title:"Global Properties",permalink:"/docs/globals"},next:{title:"File post-processing",permalink:"/docs/file-post-processing"}},u={},c=[{value:"Tool-specific Declarations",id:"tool-specific-declarations",level:2},{value:"Discovering Options",id:"discovering-options",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our tooling supports the following types of configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/globals"},"global properties"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"properties with cross-cutting concerns which control generation, but  ",(0,i.kt)("em",{parentName:"li"},"don't")," belong to individual generators"),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"debugSupportingFiles")," prints the contents of template data bound to supporting files"))),(0,i.kt)("li",{parentName:"ul"},"config options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"configuration specific to each individual ",(0,i.kt)("a",{parentName:"li",href:"/docs/generators/"},"generator")),(0,i.kt)("li",{parentName:"ul"},"these options are susceptible to validation within the defining generator; a config option of the same name across multiple generators may be validated differently in each"),(0,i.kt)("li",{parentName:"ul"},'NOTE: The CLI accepts config options as "additional properties"'))),(0,i.kt)("li",{parentName:"ul"},"additional properties",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"these are the properties which will be passed to templates"),(0,i.kt)("li",{parentName:"ul"},"generally used to pass user-defined properties to custom templates"),(0,i.kt)("li",{parentName:"ul"},"many config options may also be passed as additional properties, however generators will read/modify/rewrite config options"),(0,i.kt)("li",{parentName:"ul"},"users may pass custom additional properties and use these within templates (e.g. a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"generatedBy")," key with a value of ",(0,i.kt)("inlineCode",{parentName:"li"},"Jim Schubert")," for inclusion in a custom CVS-like header)"))),(0,i.kt)("li",{parentName:"ul"},"top-level properties specific to individual tools/plugins used to bootstrap our tooling")),(0,i.kt)("h2",{id:"tool-specific-declarations"},"Tool-specific Declarations"),(0,i.kt)("p",null,"The READMEs for the ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/usage#generate"},"CLI"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin"},"Gradle Plugin"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-maven-plugin"},"Maven Plugin"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/sbt-openapi-generator/blob/master/README.md"},"SBT Plugin")," may have top-level or tooling specific options which appear to duplicate 'config options' or 'global properties'. Each may also expose user-facing properties slightly differently from the other tools. This may occur due to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conventions used by the underlying tooling"),(0,i.kt)("li",{parentName:"ul"},"Limitations in underlying frameworks which define how properties must be declared"),(0,i.kt)("li",{parentName:"ul"},'Continuation of support for "legacy" invocation patterns'),(0,i.kt)("li",{parentName:"ul"},"Mistakes in documentation and/or contributions (please do ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenAPITools/openapi-generator/issues/new?assignees=&labels=Issue%3A+Bug&template=bug_report.md&title=%5BBUG%5D+Issue+with+options"},"file a bug"),")")),(0,i.kt)("p",null,"Take, for example, the CLI option of ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-validate-spec"),". This flag sets the value to true with no option to set it to false (the default internally). The maven and gradle plugins allow for the top-level option ",(0,i.kt)("inlineCode",{parentName:"p"},"skipValidateSpec")," to have a value of true or false. The SBT plugin, on the other hand, follows community convention and this property is ",(0,i.kt)("inlineCode",{parentName:"p"},"openApiSkipValidateSpec"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"How")," you provide values to options also depends on the tool. OpenAPI Generator supports global properties for ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/customization/#selective-generation"},"selective generation")," -- such as ",(0,i.kt)("inlineCode",{parentName:"p"},"apis")," -- to have either a blank value or a comma-separated list of selected values. We would define this in CLI as ",(0,i.kt)("inlineCode",{parentName:"p"},"--global-property apis")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--global-property apis=Equipment"),". In the Gradle Plugin, these properties are set directly as strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'openApiGenerate {\n    globalProperties.set([\n        apis: "",\n        models: "User:Pet"\n    ])\n}\n')),(0,i.kt)("p",null,"In the Maven plugin, we're limited by XML syntax where ",(0,i.kt)("inlineCode",{parentName:"p"},"<apis/>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<apis></apis>")," are treated the same as if the ",(0,i.kt)("inlineCode",{parentName:"p"},"apis"),' node was undefined; there\'s no way to provide an empty string as a default. Instead, we have to extract the global property into its own properties which maintain the two states supported elsewhere (i.e. "all apis" or "select apis"). We have ',(0,i.kt)("inlineCode",{parentName:"p"},"generateApis")," which accepts a boolean and ",(0,i.kt)("inlineCode",{parentName:"p"},"apisToGenerate")," which accepts a comma-separated selection list."),(0,i.kt)("h2",{id:"discovering-options"},"Discovering Options"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/globals"},"global properties")," for a list of available global properties and their usage."),(0,i.kt)("p",null,"Top-level tooling options are defined in ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/usage/#generate"},"CLI usage"),". Many of these options directly map to camel case options in other tools, but do refer to ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/plugins"},"plugin documentation")," for full details or plugin-specific differences."),(0,i.kt)("p",null,"Config options for generators are available in ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/generators"},"documentation online"),". You may also use the CLI to query config options for a target generator using ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-generator config-help -g <generator-name>"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openapi-generator config-help -g mysql-schema\n\nCONFIG OPTIONS\n\n    defaultDatabaseName\n        Default database name for all MySQL queries (Default: )\n\n    identifierNamingConvention\n        Naming convention of MySQL identifiers(table names and column names). This is not related to database name which is defined by defaultDatabaseName option (Default: original)\n            original - Do not transform original names\n            snake_case - Use snake_case names\n\n    jsonDataTypeEnabled\n        Use special JSON MySQL data type for complex model properties. Requires MySQL version 5.7.8. Generates TEXT data type when disabled (Default: true)\n\n    namedParametersEnabled\n        Generates model prepared SQLs with named parameters, eg. :petName. Question mark placeholder used when option disabled. (Default: false)\n")),(0,i.kt)("p",null,"This output provides the name of the configuration option. A set of acceptable values for any constrained values will print as an indented list (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"identifierNamingConvention")," above)."),(0,i.kt)("p",null,"Suppose you want to apply snake case naming to mysql schema outputs. Your configuration might resemble the following examples."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openapi-generator -g mysql-schema -o out -i spec.yaml --additional-properties=identifierNamingConvention=snake_case,useSingleRequestParameter=true,withInterfaces=true\n")),(0,i.kt)("p",null,"It may seem like a typo but there are two ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," signs in the above example."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maven Plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<execution>\n    <id>mysql-schema</id>\n    <phase>generate-sources</phase>\n    <goals>\n        <goal>generate</goal>\n    </goals>\n    <configuration>\n        <inputSpec>spec.yaml</inputSpec>\n        <generatorName>mysql-schema</generatorName>\n        <configOptions>\n            <identifierNamingConvention>snake_case</identifierNamingConvention>\n        </configOptions>\n        <output>${project.build.directory}/generated-sources/mysql</output>\n    </configuration>\n</execution>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gradle Plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'openApiGenerate {\n    generatorName.set("mysql-schema")\n    inputSpec.set("$rootDir/spec.yaml")\n    outputDir.set("$buildDir/mysql")\n    configOptions.set([\n            identifierNamingConvention: "snake_case"\n    ])\n}\n')))}m.isMDXComponent=!0}}]);