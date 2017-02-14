##src/App.html

```
{{#if page === 'about'}}
    <a href="#" class="selected" on:click='about()'>About</a>
{{else}}
    <a href="#" on:click='about()'>About</a>
{{/if}}
```
How do you change the class inline?



```
{{#if page === 'about'}}
    <Details content={{aboutdetails}} />
{{elseif page === 'themes'}}
    <Details content={{details}} />
    <Graph data={{graphdata}} primarytype='work' categorytype={{graphcategory}} on:nodeselected='nodeSelected(event)' />
{{else}}
    <Details content={{details}} />
    <Graph data={{graphdata}} primarytype='work' categorytype={{graphcategory}} on:nodeselected='nodeSelected(event)' />
{{/if}}

```
Why do you I have to repeat content to force it to render?


##/src/components/Details.html

```
{{#if content.image && content.link}}
    <a href="{{content.link}}">
        <img src="/images/{{content.image}}" />
    </a>
{{elseif content.image}}
    <img src="/images/{{content.image}}" />
{{/if}}
```
How do you do nested #if statements?



```
{{#if content.image}}
    {{#if content.link}}<a href="{{content.link}}">{{/if}}
    <img src="/images/{{content.image}}" />
    {{#if content.link}}</a>{{/if}}
{{/if}}
```
Gives you this compiler error:

```
(svelte plugin) (9:58) Unexpected block closing tag
 7:     {{/if}}
```