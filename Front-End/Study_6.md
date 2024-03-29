## Base64

바이너리 데이터를 문자 코드에 영향을 받지 않는 공통 ASCII 문자로 표현하기 위해 만들어진 인코딩<br>

> 인코딩(encoding)은 파일에 저장된 정보의 형태나 형식을 데이터 표준화, 보안, 처리 속도 향상, 저장 공간 절약 등을 위해서 다른 형태로 변환하는 처리 혹은 그 처리 방식을 말합니다<br>
> 이메일 등의 전송, 동영상이나 이미지 영역에서 많이 사용되며, 반대말은 디코딩(decoding)입니다

<br>
8비트짜리 바이트 3개를 6비트씩 4개로 쪼개어 Base64 코드 4개로 바꾸어 표현한다<br>
Base64 코드를 바이너리로 디코딩하기 편하게 하기 위해 Base64 코드를 무조건 4글자 단위로 만들고, 빈 부분을 '=' 문자로 채워두기도 한다<br>
종류에 따라 채우지 않기도 한다<br>
채우지 않아도 디코딩할 때 꼬일 염려는 없기 때문이다<br>

Base64는 어떤 문자와 기호를 쓰느냐에 따라 다양한 변종이 있지만 **대부분 처음 62개는 알파벳 A-Z, a-z와 0-9를 사용**하며 마지막 두 개를 어떤 기호를 쓰느냐의 차이만 있습니다<br>

-   Base64 변환표<br>
    ![](https://velog.velcdn.com/images/channn02/post/8f07ef35-ebba-475a-b080-9a21ab5770a7/image.png)

<br>
Base64로 인코딩을 하게 되면 6bit당 2bit의 Overhead가 발생하여 전송해야 될 데이터의 크기가 약 33% 정도 늘어납니다<br>
33%나 데이터의 크기가 증가하고, 인코딩과 디코딩의 추가 연산까지 필요한데 Base64 인코딩을 사용하는 이유는 통신과정에서 바이너리 데이터의 손실을 막기 위해 사용됩니다<br>
플랫폼 독립적으로 Binary Data(이미지나 오디오)를 전송할 필요가 있을 때, ASCII로 Encoding 하여 전송하게 되면 문제가 발생할 수 있습니다<br>
<br>
• ASCII는 7 bits Encoding인데 나머지 1bit를 처리하는 방식이 시스템 별로 상이합니다<br>
• 일부 제어 문자 (e.g. Line ending)의 경우 시스템 별로 다른 코드값을 가집니다<br>
<br>
이러한 문제로 ASCII는 시스템 간 데이터를 전달하기에 안전하지 않습니다<br>
Base64는 ASCII 중 제어 문자와 일부 특수문자를 제외한 64개의 **안전한** 출력 문자만 사용합니다<br>
<br>
즉, Base64는 HTML 또는 Email과 같이 문자를 위한 Media에 Binary Data를 포함해야 될 필요가 있을 때, <br>포함된 Binary Data가 시스템 독립적으로 동일하게 전송 또는 저장되는 걸 보장하기 위해 사용합니다
<br>

[참고 문서](https://devuna.tistory.com/41)
