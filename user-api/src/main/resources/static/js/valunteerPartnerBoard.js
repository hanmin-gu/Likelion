// 글 목록 데이터 (예시)
var articles = [
    { 번호: 1, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 2, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 3, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 4, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 5, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 6, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 7, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 8, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 9, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 10, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 11, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 12, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 13, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 14, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 15, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 16, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 17, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 18, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 19, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 20, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 21, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 22, 제목: '첫 번째 글', 작성일: '2023-09-14', 조회수: 100 },
    { 번호: 23, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 },
    { 번호: 24, 제목: '세 번째 글', 작성일: '2023-09-16', 조회수: 300 },
    { 번호: 25, 제목: '두 번째 글', 작성일: '2023-09-15', 조회수: 200 }
];

var tableBody = document.getElementById('tableBody');
var pagination = document.getElementById('pagination');
var itemsPerPage = 10; // 페이지당 표시할 항목 수
var currentPage = 1; // 현재 페이지

// 이전 페이지로 이동
function previousPage() {
    if (currentPage > 1) {
        updatePage(currentPage - 1);
    }
}

// 다음 페이지로 이동
function nextPage() {
    var totalPages = Math.ceil(articles.length / itemsPerPage);
    if (currentPage < totalPages) {
        updatePage(currentPage + 1);
    }
}

// 페이지를 업데이트하는 함수
function updatePage(page) {
    tableBody.innerHTML = ''; // 테이블 내용 초기화
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var displayedArticles = articles.slice(startIndex, endIndex);

    // 글 목록을 테이블에 추가
    for (var i = 0; i < displayedArticles.length; i++) {
        var article = displayedArticles[i];
        var row = document.createElement('tr');

        // 각 열에 데이터 추가
        var 번호Cell = document.createElement('td');
        번호Cell.textContent = article.번호;
        row.appendChild(번호Cell);

        var 제목Cell = document.createElement('td');
        var 제목Link = document.createElement('a');
        제목Link.href = '#'; // 링크 URL 설정
        제목Link.textContent = article.제목;
        제목Cell.appendChild(제목Link);
        row.appendChild(제목Cell);

        var 작성일Cell = document.createElement('td');
        작성일Cell.textContent = article.작성일;
        row.appendChild(작성일Cell);

        var 조회수Cell = document.createElement('td');
        조회수Cell.textContent = article.조회수;
        row.appendChild(조회수Cell);

        // 행을 테이블에 추가
        tableBody.appendChild(row);
    }

    // 페이징 컨트롤 업데이트
    var totalPages = Math.ceil(articles.length / itemsPerPage);
    var paginationHTML = '';

    paginationHTML += '<li><a href="#" onclick="previousPage()">&lt;</a></li>';
    for (var i = 1; i <= totalPages; i++) {
        paginationHTML += '<li><a href="#" onclick="updatePage(' + i + ')"';
        if (i === page) {
            paginationHTML += ' class="active"';
        }
        paginationHTML += '>' + i + '</a></li>';
    }
    paginationHTML += '<li><a href="#" onclick="nextPage()">&gt;</a></li>';

    pagination.innerHTML = paginationHTML;
    currentPage = page; // 현재 페이지 업데이트
}

// 페이지 초기화
updatePage(currentPage);






