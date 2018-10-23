# choice-maker

A choice maker service to random return the result of items.

### Health route
https://choice-maker-jh.herokuapp.com/health

### Example usage
```
Address: https://choice-maker-jh.herokuapp.com/result
HTTP POST
Body
{
    "items": ["111","222", "333"]
}
```

### Example result
```
{
    "items": [
        "111",
        "222",
        "333"
    ],
    "result": "222"
}
```

