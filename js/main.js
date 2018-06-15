window.onresize = function(){ location.reload(); }
$( document ).ready(function() {
    $('.pull-down').each(function() {
        var $this = $(this);
        $this.css('margin-top', $this.parent().height() - $this.height())
    });
    // Get the modal
    var modal = document.getElementById('posterModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('poster');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var entireSpan = document.getElementById('posterModal');

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    entireSpan.onclick = function (ev) {
        modal.style.display = 'none';
    }


    $("#submit").click(function(e) {
        e.preventDefault();

        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();
        console.log(name + email + message);

        $.ajax({
            type: "POST",
            url: 'https://vpdb1blgqk.execute-api.us-east-1.amazonaws.com/prod/contactJoe',
            data: JSON.stringify({
                'name': name,
                'email': email,
                'message': message
            }),
            success: function(res){
                $('#form-response').text('Email was sent.');
            },
            error: function(){
                $('#form-response').text('Error.');
            }
        });

    });



});

(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        if(document.title === "Joe Lynn_"){
            titleScroller("Joe Lynn");
        } else {
            titleScroller("Joe Lynn_")
        }
    }, 650);
}(" Joe Lynn_"));















var j = { resource: '/contactJoe',
    path: '/contactJoe',
    httpMethod: 'POST',
    headers:
    { Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'CloudFront-Forwarded-Proto': 'https',
        'CloudFront-Is-Desktop-Viewer': 'true',
        'CloudFront-Is-Mobile-Viewer': 'false',
        'CloudFront-Is-SmartTV-Viewer': 'false',
        'CloudFront-Is-Tablet-Viewer': 'false',
        'CloudFront-Viewer-Country': 'US',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Host: 'vpdb1blgqk.execute-api.us-east-1.amazonaws.com',
        origin: 'http://localhost:63342',
        Referer: 'http://localhost:63342/joe-lynn.github.io/index.html?_ijt=1o5qqbl15fm37d8q43tqm50t5i',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
        Via: '2.0 d3424c9f9521e1ec049f487748144c76.cloudfront.net (CloudFront)',
        'X-Amz-Cf-Id': 'FBezmJCAxz1OZeekQ5-NZjEyWqQImqzmQ0Pl_6W8skZO4mgeVjU4ug==',
        'X-Amzn-Trace-Id': 'Root=1-5b2425ad-b8d81874f0aadd34cfb557fc',
        'X-Forwarded-For': '129.21.162.88, 52.46.29.94',
        'X-Forwarded-Port': '443',
        'X-Forwarded-Proto': 'https' },
    queryStringParameters: null,
        pathParameters: null,
    stageVariables: null,
    requestContext:
    { resourceId: 'mxy0nv',
        resourcePath: '/contactJoe',
        httpMethod: 'POST',
        extendedRequestId: 'IirTGFzjIAMFWmQ=',
        requestTime: '15/Jun/2018:20:46:37 +0000',
        path: '/prod/contactJoe',
        accountId: '923267726925',
        protocol: 'HTTP/1.1',
        stage: 'prod',
        requestTimeEpoch: 1529095597452,
        requestId: '32a46ce7-70dd-11e8-954c-3d446d71cc70',
        identity:
        { cognitoIdentityPoolId: null,
            accountId: null,
            cognitoIdentityId: null,
            caller: null,
            sourceIp: '129.21.162.88',
            accessKey: null,
            cognitoAuthenticationType: null,
            cognitoAuthenticationProvider: null,
            userArn: null,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
            user: null },
        apiId: 'vpdb1blgqk' },
    body: '{"name":"sffdsf","email":"fffff","message":"uuuuuuuuuuuuu"}',
        isBase64Encoded: false }
