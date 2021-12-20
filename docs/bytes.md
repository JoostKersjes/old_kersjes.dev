# Bytes

## Typescript

### Tagged template string

```typescript
const firstName = 'Joost';
const lastName = 'Kersjes';
const topic = 'Typescript';

function say(strings: TemplateStringsArray, ...expr: string[]) {
  let out = '';
  strings.forEach((str, i) => {
    out += str + (expr[i] || '');
  });
  return out;
}

console.log(say`Welcome, ${firstName} ${lastName}. Learn ${topic} here`);
```
Source: https://www.tektutorialshub.com/typescript/typescript-tagged-templates/

### Intl language display name

```typescript
export const languageDisplayName = (locale: Intl.Locale, fullName = false): string => {
  const displayNames = new Intl.DisplayNames(locale.toString(), { type: 'language' });
  const languageCode = fullName ? locale.toString() : locale?.language ?? locale.toString();
  return displayNames.of(languageCode);
};
```
Source: me
