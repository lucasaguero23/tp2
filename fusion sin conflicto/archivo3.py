def sumar(x):
    if x<= 1:
        return 1
    else:
        return x * sumar(x-1)
print(sumar(4))