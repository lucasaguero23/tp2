def suma(x):
    if x <= 1:
        return 1
    elif x <= 4:
        return x * suma(x - 1)

print(f"Hola {suma(4)}")

