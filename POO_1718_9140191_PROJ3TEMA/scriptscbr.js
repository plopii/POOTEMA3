let users = []
let booksCategory = []
let booksTag = []
let libraries = []
let books = []
let requests = []
let commentaries = []
let notifications = []
let configMultas = []

class User {

 constructor(name, email, password, type, multa, photo) {
    this.id = users.length+1
    this.name = name
    this.email = email
    this.password = password
    this.type = type
    this.multa = multa
    this.photo = photo
 }

/*

 // Id
 get id() {
    return this._id
 }

 // Name
 get name() {
     return this._name
 }

 set name(newName) {
     this._name = newName
 }

 // Email
 get email() {
     return this._email
 }

 set email(newEmail) {
    this._email = newEmail
 }

 // Password
 get password() {
    return this._password
 }

 set password(newPassoword) {
    this._password = newPassoword
 }

 // Type
 get type() {
     return this._type
 }

 set type(newType) {
     this._type = newType
 }

 // Multa
 get multa() {
    return this._multa
 }

 set multa(newMulta) {
    this._multa = newMulta
 }

 // Photo
 get photo() {
     return this._photo
 }

 set photo(newPhoto) {
     this._photo = newPhoto
 }

 static getLastId() {
    let lastId = 0
    if(users.length != 0) {
        lastId = users[users.length-1].id
    }
        return lastId
    } */    
}

class BookCategory {

 constructor(category) {
    this.id = booksCategory.length+1
    this.category = category
 }

/*
 // Id
 get id() {
    return this._id
 }

 // Category
 get category() {
     return this._category
 }

 set category(newCategory) {
     this._category = newCategory
 }

 static getLastId() {
    let lastId = 0
    if(booksCategory.length != 0) {
        lastId = booksCategory[booksCategory.length-1].id
    }
        return lastId
    } */
}

class BookTag {

 constructor(tag) {
    this.id = booksTag.length+1
    this.tag = tag
 }

/*
 // Id
 get id() {
    return this._id
 }

 // Tag
 get tag() {
     return this._tag
 }

 set tag(newTag) {
     this._tag = newTag
 }

 static getLastId() {
    let lastId = 0
    if(booksTag.length != 0) {
        lastId = booksTag[booksTag.length-1].id
    }
        return lastId
    } */
}

class Library {

 constructor(adress, parish, gps, capacity) {
    this.id = libraries.length + 1
    this.adress = adress
    this.parish = parish
    this.gps = gps
    this.capacity = capacity
 }

 /*
 // Id
 get id() {
    return this._id
 }

 // Adress
 get adress() {
     return this._adress
 }

 set adress(newAdress) {
     this._adress = newAdress
 }

 // Parish
 get parish() {
     return this._parish
 }

 set parish(newParish) {
     this._parish = newParish
 }

// GPS
 get gps() {
     return this._gps
 }

 set gps(newGps) {
     this._gps = newGps
 }

// Capacity
 get capacity() {
     return this._capacity
 }

 set capacity(newCapacity) {
     this._capacity = newCapacity
 }

 static getLastId() {
    let lastId = 0
    if(libraries.length != 0) {
        lastId = libraries[libraries.length-1].id
    }
        return lastId
    } */
}

class Book {

 constructor(title, cover, description, writer, launch, categoryId, tagId, publisher, pages, condition, donatorName, donationDate, libraryId, libraryAvailable) {
    this.id = books.length + 1
    this.title = title
    this.cover = cover
    this.description = description
    this.writer = writer
    this.launch = launch
    this.categoryId = categoryId
    this.tagId = tagId
    this.publisher = publisher
    this.pages = pages
    this.condition = condition
    this.donatorName = donatorName
    this.donationDate = donationDate
    this.libraryId = libraryId
    this.libraryAvailable = libraryAvailable  // enunciado tem uma gralha por isso decidi adicionar outro campo para ver a disponibilidade do livro
 }
/*
 // Id
 get id() {
    return this._id
 }

 // Title
 get title() {
     return this._title
 }

 set title(newTitle) {
     this._title = newTitle
 }

 // Cover
 get cover() {
     return this._cover
 }

 set cover(newCover) {
     this._cover = newCover
 }

  // Description
 get description() {
     return this._description
 }

 set description(newDescription) {
     this._description = newDescription
 }

 // Writer
 get writer() {
     return this._writer
 }

 set writer(newWriter) {
     this._writer = newWriter
 }

 // Launch
 get launch() {
     return this._launch
 }

 set launch(newLaunch) {
     this._launch = newLaunch
 }

 // CategoryId
 get categoryId() {
     return this._categoryId
 }

 set categoryId(newCategoryId) {
     this._categoryId = newCategoryId
 }

  // TagId
 get tagId() {
     return this._tagId
 }

 set tagId(newTagId) {
     this._tagId = newTagId
 }

  // Publisher
 get publisher() {
     return this._publisher
 }

 set publisher(newPublisher) {
     this._publisher = newPublisher
 }

  // Pages
 get pages() {
     return this._pages
 }

 set pages(newPages) {
     this._pages = newPages
 }

  // Condition
 get condition() {
     return this._condition
 }

 set condition(newCondition) {
     this._condition = newCondition
 }

  // DonatorName
 get donatorName() {
     return this._donatorName
 }

 set donatorName(newDonatorName) {
     this._donatorName = newDonatorName
 }

  // DonationDate
 get donationDate() {
     return this._donationDate
 }

 set donationDate(newDonationDate) {
     this._donationDate = newDonationDate
 }

  // LibraryId
 get libraryId() {
     return this._libraryId
 }

 set libraryId(newLibraryId) {
     this._libraryId = newLibraryId
 }

 static getLastId() {
    let lastId = 0
    if(books.length != 0) {
        lastId = books[books.length-1].id
    }
        return lastId
    } */
}

class Request {

 constructor(userId, bookId, requestDate, deliveryDate, status) {
    this.id = requests.length + 1
    this.userId = userId
    this.bookId = bookId
    this.requestDate = requestDate
    this.deliveryDate = deliveryDate
    this.status = status
 }
 /*
 // Id
 get id() {
    return this._id
 }

 // UserId
 get userId() {
     return this._userId
 }

 set userId(newUserId) {
     this._userId = newUserId
 }

 // BookId
 get bookId() {
     return this._bookId
 }

 set bookId(newBookId) {
     this._bookId = newBookId
 }

// RequestDate
 get requestDate() {
     return this._requestDate
 }

 set requestDate(newRequestDate) {
     this._requestDate = newRequestDate
 }

// DeliveryDate
 get deliveryDate() {
     return this._deliveryDate
 }

 set deliveryDate(newDeliveryDate) {
     this._deliveryDate = newDeliveryDate
 }

 static getLastId() {
    let lastId = 0
    if(requests.length != 0) {
        lastId = requests[requests.length-1].id
    }
        return lastId
    } */
}

class Commentary {

 constructor(userId, bookId, comment, score) {
    this.id = commentaries.length + 1
    this.userId = userId
    this.bookId = bookId
    this.comment = comment
    this.score = score
 }
 /*
 // Id
 get id() {
    return this._id
 }

 // UserId
 get userId() {
     return this._userId
 }

 set userId(newUserId) {
     this._userId = newUserId
 }

 // BookId
 get bookId() {
     return this._bookId
 }

 set bookId(newBookId) {
     this._bookId = newBookId
 }

// Comment
 get comment() {
     return this._comment
 }

 set comment(newComment) {
     this._comment = newCommente
 }

// Score
 get score() {
     return this._score
 }

 set score(newScore) {
     this._score = newScore
 }

 static getLastId() {
    let lastId = 0
    if(commentaries.length != 0) {
        lastId = commentaries[commentaries.length-1].id
    }
        return lastId
    } */
}

class Notification {

 constructor(userId, tags, libraries, books) {
    this.id = notifications.length + 1
    this.userId = userId
    this.tags = tags
    this.libraries = comlibrariesment
    this.books = books
 }
 /*
 // Id
 get id() {
    return this._id
 }

 // UserId
 get userId() {
     return this._userId
 }

 set userId(newUserId) {
     this._userId = newUserId
 }

 // Tags
 get tags() {
     return this._tags
 }

 set tags(newTags) {
     this._tags = newTags
 }

// Libraries
 get libraries() {
     return this._libraries
 }

 set libraries(newLibraries) {
     this._libraries = newLibraries
 }

// Books
 get books() {
     return this._books
 }

 set books(newBooks) {
     this._books = newBooks
 }

 static getLastId() {
    let lastId = 0
    if(notifications.length != 0) {
        lastId = notifications[notifications.length-1].id
    }
        return lastId
    } */
}

class ConfigMulta {

 constructor(daysUntil, perDay, total) {
    this.id = configMultas.length+1
    this.daysUntil = daysUntil
    this.perDay = perDay
    this.total = total
 }
}
window.onload = function() {

    //localStorage.clear();
    loadLocalStorage();
    let loggedInUser = localStorage.getItem("loggedInUser");
    let loggedInUserPos = localStorage.getItem("loggedInUserPos");

    let editUser = localStorage.getItem("editUser");
    console.log(users);
    console.log(booksTag);
    console.log(booksCategory);
    console.log(books);
    console.log(libraries);
    console.log(requests);
    console.log(configMultas);
    console.log(loggedInUser);
    console.log(loggedInUserPos);

    /*if (loggedInUser == null)
		{
			window.location.href = "landing.html";
		}
    else{
        if(users[loggedInUserPos].type == 2)
        {
            window.location.href = "dashboard.html";
        }
        else if(users[loggedInUserPos].type == 1)
        {
            window.location.href = "dashboardOperator.html";
        }
        else if(users[loggedInUserPos].type == 0)
        {
            window.location.href = "dashboardAdmin.html";
        }
    }*/

    if (users.length == 0){
        let user01 = new User("Joao", "joao@exemplo.pt", "senha", 2, 0, "")
        users.push(user01);
        let user02 = new User("Maria", "maria@exemplo.pt", "senha", 2, 0, "")
        users.push(user02);
        let user03 = new User("Operador", "operador@gmail.com", "operador", 1, 0, "")
        users.push(user03);
        let user04 = new User("Admin", "admin@gmail.com", "admin", 0, 0, "")
        users.push(user04);
        saveLocalStorageUsers();
     }
     if (libraries.length == 0){
        let library01 = new Library("Rua Adário Gonçalves Moreira, Nº 1523,  4485-826", "Vilar de Pinheiro", [41.270029, -8.662389], 400)
        libraries.push(library01);
        let library02 = new Library("Avenida Julio Saul Dias, 48, 4480-673", "Vila do Conde", [41.359856, -8.745935], 666)
        libraries.push(library02);
        saveLocalStorageLibraries();
     }
     if (booksTag.length == 0){
        let bookTag00 = new BookTag("Por Determinar")
        booksTag.push(bookTag00);
        let bookTag01 = new BookTag("Ficção")
        booksTag.push(bookTag01);
        let bookTag02 = new BookTag("Informática")
        booksTag.push(bookTag02);
        let bookTag03 = new BookTag("Super Herói")
        booksTag.push(bookTag03);
        let bookTag04 = new BookTag("Mistério")
        booksTag.push(bookTag04);
        saveLocalStorageBooksT();
     }
     if (booksCategory.length == 0){
        let bookCategory00 = new BookCategory("Por Determinar")
        booksCategory.push(bookCategory00);
        let bookCategory01 = new BookCategory("Aventura")
        booksCategory.push(bookCategory01);
        let bookCategory02 = new BookCategory("Infatis")
        booksCategory.push(bookCategory02);
        let bookCategory03 = new BookCategory("Acção")
        booksCategory.push(bookCategory03);
        saveLocalStorageBooksC();
     }
     if (books.length == 0){
        let book01 = new Book("Harry Potter and the Cursed Child", "covers/cover_01.jpg", "Where Harry grapples with a past that refuses to stay where it belongs.", "J. K. Rowling", "31/07/2016", booksCategory[1].id, booksTag[1].id, "Arthur A. Levine Books", "330", "Boa", "", "12/07/2018", libraries[0].id, "Dísponivel")
        books.push(book01);  
        let book02 = new Book("Spider-Man: Big Time", "covers/cover_02.jpg", "'Big Time' é uma série de histórias em quadrinhos de The Amazing Spider-Man, publicado pela Marvel Comics de 2010 a 2011.", "Dan Slott", "01/03/2011", booksCategory[3].id, booksTag[3].id, "Marvel Comics", "30", "Aceitável", "", "12/02/2018", libraries[1].id, "Dísponivel")
        books.push(book02); 
        let book03 = new Book("Tintin: The Broken Ear", "covers/cover_03.jpg", "The Broken Ear is the sixth album of The Adventures of Tintin and sequel to The Blue Lotus.", "Hergé", "25/02/1937", booksCategory[1].id, booksTag[4].id, "Casterman", "62", "Aceitável", "", "11/07/2018", libraries[1].id, "Dísponivel")
        books.push(book03);  
        saveLocalStorageBooks();
     }
     if (configMultas.length == 0){
        let configmulta = new ConfigMulta(10, 3, 50)
        configMultas.push(configmulta);
        saveLocalStorageConfigMultas();
     }

if(document.getElementById("tblBooks"))
    {
        renderTable();
    }

    if(document.getElementById("btnFilterCategory"))
    {
        let btnFilterCategory = document.getElementById("btnFilterCategory")
        let inputCategory = document.getElementById("inputCategory")
        for(var i = 0; i < booksCategory.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = booksCategory[i].category;
            opt.value = booksCategory[i].category;
            inputCategory.appendChild(opt);
        }
        // Add listener to Filter button
        btnFilterCategory.addEventListener("click", function() {     
            renderTable(inputCategory.value);
    })
    }

    if(document.getElementById("btnFilterTag"))
    {
        let btnFilterTag = document.getElementById("btnFilterTag")
        let inputTag = document.getElementById("inputTag")
        for(var i = 0; i < booksTag.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = booksTag[i].tag;
            opt.value = booksTag[i].tag;
            inputTag.appendChild(opt);
        }
        // Add listener to Filter button
        btnFilterTag.addEventListener("click", function() {  
            renderTable(inputTag.value);      
            
    })
    }

    if(document.getElementById("btnFilterWriter"))
    {
        
        let btnFilterWriter = document.getElementById("btnFilterWriter")
        let inputWriter = document.getElementById("inputWriter")
        let autorExistente = false;

                for(var i = 0; i < books.length; i++) {

                    var opt = document.createElement('option');
                    opt.innerHTML = books[i].writer;
                    opt.value = books[i].writer;
                    inputWriter.appendChild(opt);
                 }
        /*for(var i = 0; i < books.length; i++) {
                if( i == 0)
                 {
                    var opt = document.createElement('option');
                    opt.innerHTML = books[i].writer;
                    opt.value = books[i].writer;
                    inputWriter.appendChild(opt);
                 }
                 else{
                    for(var j = i+1; j < books.length; j++) {
                        if(books[i].writer == books[j].writer){
                            
                            autorExistente = true;
                            break;
                        }  
                    }
                    if (autorExistente = false)
                    {
                    var opt = document.createElement('option');
                    opt.innerHTML = books[i].writer;
                    opt.value = books[i].writer;
                    inputWriter.appendChild(opt);
                    }
        
                 }   
             }*/
        // Add listener to Filter button
        btnFilterWriter.addEventListener("click", function() {        
            renderTable(inputWriter.value);
    })
    }

    if(document.getElementById("btnFilterLibrary"))
    {
        
        let btnFilterLibrary = document.getElementById("btnFilterLibrary")
        let inputLibrary = document.getElementById("inputLibrary")
        for(var i = 0; i < libraries.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = libraries[i].id;
            opt.value = libraries[i].id;
            inputLibrary.appendChild(opt);
        }

        // Add listener to Filter button
        btnFilterLibrary.addEventListener("click", function() {    
            renderTable(inputLibrary.value);    
            
    })
    }

    if(document.getElementById("userLoggedIn"))
    {
        document.getElementById("userLoggedIn").innerHTML = users[loggedInUserPos].name + ","

    }

    if(document.getElementById("formDonate"))
    {
        
        let libraryDonate = document.getElementById("libraryDonate")
        for(var i = 0; i < libraries.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = libraries[i].adress;
            opt.value = libraries[i].id;
            libraryDonate.appendChild(opt);
        }
    }

    if(document.getElementById("formRequest"))
    {
        
        let booksAvailable = document.getElementById("booksAvailable")
        for(var i = 0; i < books.length; i++) {
            if(books[i].libraryAvailable == "Dísponivel"){
                var opt = document.createElement('option');
                opt.innerHTML = books[i].title;
                opt.value = books[i].id;
                booksAvailable.appendChild(opt);
            }       
        }
    }

    if(document.getElementById("formDeliver"))
    {
        
        let booksToDeliver = document.getElementById("booksToDeliver")
        let libraryName = document.getElementById("libraryName")
        for(var i = 0; i < requests.length; i++) {
            if(requests[i].userId == loggedInUser){
                if(requests[i].status == 1){
                    var opt = document.createElement('option');
                    console.log(requests[i].bookId);
                    opt.innerHTML = books[(requests[i].bookId)-1].title;
                    opt.value = requests[i].id;  
                    booksToDeliver.appendChild(opt);
                }
            }       
        }

        for(var i = 0; i < libraries.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = libraries[i].adress;
                opt.value = i;
                libraryName.appendChild(opt);      
        }
    }



    let formLogin = document.getElementById("formLogin")
    // Login
    if(formLogin){
        formLogin.addEventListener("submit", function(event) { 
            let emailLogin = document.getElementById("inputEmail");
            let passwordLogin = document.getElementById("inputPassword");
            let exists = false;
            for (var i = 0; i < users.length; i++)
            { 
                if ( emailLogin.value == users[i].email)
                {
                   exists = true;
                   pos = i;
                   localStorage.setItem("loggedInUserPos", pos);
                   break;                   
                }		
            }
            if (exists == false)
            {
                event.preventDefault();
                alert("Não existe uma conta com este email.");
                document.getElementById("inputPassword").value = "";
                emailLogin.focus();
            }
            else{
                var loggedInUserPos = localStorage.getItem("loggedInUserPos");
                if(passwordLogin.value == users[loggedInUserPos].password){
	                    alert("Login Bem Sucedido");
                    localStorage.setItem("loggedInUser", users[pos].id);
                    var loggedInUser = localStorage.getItem("loggedInUser");
                    if(users[loggedInUserPos].type == 2)
                    {
                        window.location.href = "dashboard.html";
                    }
                    else if(users[loggedInUserPos].type == 1)
                    {
                        window.location.href = "dashboardOperator.html";
                    }
                    else if(users[loggedInUserPos].type == 0)
                    {
                        window.location.href = "dashboardAdmin.html";
                    }                  
                }
                else
                {
                    localStorage.removeItem("loggedInUserPos");	
                    alert("Password errada.");
                    document.getElementById("inputPassword").value = "";
                    emailLogin.focus();
                }
                event.preventDefault();
            }
             
        })
    }


    let formRegister = document.getElementById("formRegister")
    // Sign up
    if(formRegister)
    {
        formRegister.addEventListener("submit", function(event) { 
        let nameRegister = document.getElementById("registerName");
        let emailRegister = document.getElementById("registerEmail");
        let passwordRegister = document.getElementById("passwordRegister");
        let passwordConfirmation = document.getElementById("passwordConfirmation");
        let photoRegister = document.getElementById("registerPhoto").src;
        let alreadyExist = false; 
        
        for (var i = 0; i < users.length; i++)
            { 
                console.log(emailRegister.value);
                console.log(users[i].email);
            if (emailRegister.value == users[i].email)
                {
                    alreadyExist = true;
                    break;
                }
            }
        if (alreadyExist == true)
            {
                event.preventDefault();
                alert("O utilizador já existe.");
                document.getElementById("passwordRegister").value = "";
                document.getElementById("passwordConfirmation").value = "";
                emailRegister.focus();
            }
        else {
            if (passwordRegister.value == passwordConfirmation.value)
                {
                    let newUser = new User(nameRegister.value, emailRegister.value, passwordRegister.value, 2, 0, photoRegister);
                    users.push(newUser);
                    alert("Conta criada com sucesso.");
                    saveLocalStorageUsers(); 
                   window.location.href = "login.html"; // redereciona para outra pagina           
                }
                else
                {
                    alert("As passwords não coincidem.");
                    document.getElementById("passwordRegister").value = "";
                    document.getElementById("passwordConfirmation").value = "";  
                }
        }	
        event.preventDefault();
        })

    }

    let formDonate = document.getElementById("formDonate")
    // Donate
    if(formDonate){
        formDonate.addEventListener("submit", function(event) { 
            let donateTitle = document.getElementById("donateTitle");
            let donateCover = document.getElementById("donateCover").src;
            let donateDescription = document.getElementById("donateDescription");
            let writerDonate = document.getElementById("writerDonate");
            let launchDateDonate = document.getElementById("launchDateDonate");
            let publisherDonate = document.getElementById("publisherDonate");
            let pagesDonate = document.getElementById("pagesDonate");
            let conditionDonate = document.getElementById("conditionDonate");
            let donatorDonate = document.getElementById("donatorDonate");
            var donationDate = new Date();
            var dd = donationDate.getDate();
            var mm = donationDate.getMonth()+1; //January is 0!
            var yyyy = donationDate.getFullYear();
            donationDate = dd + '/' + mm + '/' + yyyy;
            let libraryDonate = document.getElementById("libraryDonate");

            
            let newBook = new Book(donateTitle.value, donateCover.value, donateDescription.value, writerDonate.value, launchDateDonate.value, 1, 1, publisherDonate.value, pagesDonate.value, conditionDonate.value, donatorDonate.value, donationDate, libraryDonate.value, "Dísponivel");
            books.push(newBook);
            saveLocalStorageBooks(); 
            alert("Livro Doado.");
            window.location.href = "dashboardOperator.html"; // redereciona para outra pagina   
            event.preventDefault();
        })
    }

let formRequest = document.getElementById("formRequest")
    // Request
    if(formRequest){
        formRequest.addEventListener("submit", function(event) { 
            let booksAvailable = document.getElementById("booksAvailable");

            let maxReached = false;
            let contador = 0;

                for (var i = 0; i < requests.length; i++)
                { 

                    if (requests[i].userId == loggedInUser)
                    {
                        if(requests[i].status == 1){
                            contador += 1;       
                        }  
                    }		
                }

            if(contador >= 2)
                {
                    maxReached = true;
                }   
        
            if (maxReached == true)
            {
                event.preventDefault();
                alert("Já tem dois livros requisitados. Por favor entregue um deles para requisitar um novo.");
            }
            else{

                if(users[loggedInUserPos].multa == 0){

                    alert("Livro Requisitado.");
                    books[booksAvailable.value-1].libraryAvailable = "Requisitado";
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth()+1; //January is 0!
                    var yyyy = today.getFullYear();
                    today = dd + '/' + mm + '/' + yyyy;

                    var limit = new Date();
                    var dd = limit.getDate() + configMultas[0].daysUntil;
                    var mm = limit.getMonth()+1; //January is 0!
                    var yyyy = limit.getFullYear();
                    limit = dd + '/' + mm + '/' + yyyy;
                    
                    let newRequest = new Request(loggedInUser, booksAvailable.value, today, limit, 1)
                    requests.push(newRequest);
                    saveLocalStorageRequests();
                     saveLocalStorageBooks();
                    window.location.href = "dashboard.html"; // redereciona para outra pagina   
                    event.preventDefault();

                }
                else{

                    alert("Pague a multa antes de proceder.");
                }
                
                event.preventDefault();
            }
             
        })
    }

    let formDeliver = document.getElementById("formDeliver")
    // Deliver
    if(formDeliver){
        formDeliver.addEventListener("submit", function(event) { 
            let booksToDeliver = document.getElementById("booksToDeliver");
            let libraryName = document.getElementById("libraryName");
            let contador = 0;
             for (var i = 0; i < books.length; i++)
                { 

                    if (books[i].libraryId == libraryName.value+1)
                    {
                        contador += 1;          
                    }		
                }

        
            if (libraries[libraryName.value].capacity > contador)
            {
                    alert("Livro Devolvido.");
                    let requestPos = requests[booksToDeliver.value-1]
                    books[requestPos.bookId-1].libraryAvailable = "Dísponivel";
                    books[requestPos.bookId-1].libraryId = libraryName.value+1;
                    requests[booksToDeliver.value-1].status = 0;
                    saveLocalStorageRequests();
                    saveLocalStorageBooks();   
                    window.location.href = "dashboard.html"; // redereciona para outra pagina    
                    event.preventDefault();
            }
            else{
                event.preventDefault();
                alert("Biblioteca cheia, por favor escolha outra");   
            }
             
        })
    }

    if(document.getElementById("formComment"))
    {
        
        let booksList = document.getElementById("booksList")
        for(var i = 0; i < requests.length; i++) {
            if(requests[i].userId == loggedInUser){
                var opt = document.createElement('option');
                opt.innerHTML = books[requests[i].bookId-1].title;
                opt.value = books[requests[i].bookId-1].id;
                booksList.appendChild(opt);
            }       
        }
    }

    let formComment = document.getElementById("formComment")
    // Comment & Score
    if(formComment){
        formComment.addEventListener("submit", function(event) { 
           let booksList = document.getElementById("booksList");
           let donateDescription = document.getElementById("donateDescription");
           let bookScore = document.getElementById("bookScore");

           let commentedAlready = false;
           for(var i = 0; i < commentaries.length; i++) {
                if(commentaries[i].userId == loggedInUser){
                    if(commentaries[i].bookId == booksList.value){
                        commentedAlready = true;
                    }
                }
           }
           if(commentedAlready == false)
           {
            let commentary = new Commentary(loggedInUser, booksList.value, donateDescription.value, bookScore.value)
            commentaries.push(commentary);
            saveLocalStorageCommentaries();  
            alert("Comentário e Pontuação submetidos");
            window.location.href = "dashboard.html"; // redereciona para outra pagina           
            event.preventDefault();
             }
             else{
                 alert("Já comentou esse livro. Escolha outro");
             }
        })
    }

let formInsertUser = document.getElementById("formInsertUser")
    // Insert User
    if(formInsertUser){
        formInsertUser.addEventListener("submit", function(event) { 
        let nameRegister = document.getElementById("registerName");
        let emailRegister = document.getElementById("registerEmail");
        let passwordRegister = document.getElementById("passwordRegister");
        let photoRegister = document.getElementById("registerPhoto").src;
        let permissions = document.getElementById("permissions");
        let alreadyExist = false; 
        
        for (var i = 0; i < users.length; i++)
            { 
                console.log(emailRegister.value);
                console.log(users[i].email);
            if (emailRegister.value == users[i].email)
                {
                    alreadyExist = true;
                    break;
                }
            }
        if (alreadyExist == true)
            {
                event.preventDefault();
                alert("O utilizador já existe.");
                document.getElementById("passwordRegister").value = "";
                emailRegister.focus();
            }
        else {
            let newUser = new User(nameRegister.value, emailRegister.value, passwordRegister.value, permissions.value, 0, photoRegister);
            users.push(newUser);
            alert("Conta criada com sucesso.");
            saveLocalStorageUsers(); 
            window.location.href = "users.html"; // redereciona para outra pagina           

        }	
        event.preventDefault();
        })
    }

    if(document.getElementById("formChooseUser"))
    {
        
        let usersName = document.getElementById("usersName")
        for(var i = 0; i < users.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = users[i].name;
                opt.value = i;
                usersName.appendChild(opt);     
        }
    }



 if(document.getElementById("formInsertBook"))
    {
        
         let libraryDonate = document.getElementById("libraryDonate")
        for(var i = 0; i < libraries.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = libraries[i].adress;
            opt.value = libraries[i].id;
            libraryDonate.appendChild(opt);
        }

        let categoryBook = document.getElementById("categoryBook")
        for(var i = 0; i < booksCategory.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = booksCategory[i].category;
                opt.value = booksCategory[i].id;
                categoryBook.appendChild(opt);     
        }

        let tagBook = document.getElementById("tagBook")
        for(var i = 0; i < booksTag.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = booksTag[i].tag;
                opt.value = booksTag[i].id;
                tagBook.appendChild(opt);     
        }
    }
    
    
let formInsertBook = document.getElementById("formInsertBook")
    // Insert Book
    if(formInsertBook){
        formInsertBook.addEventListener("submit", function(event) { 
        let donateTitle = document.getElementById("donateTitle");
            let donateCover = document.getElementById("donateCover").src;
            let donateDescription = document.getElementById("donateDescription");
            let writerDonate = document.getElementById("writerDonate");
            let launchDateDonate = document.getElementById("launchDateDonate");
            let categoryBook = document.getElementById("categoryBook");
            let tagBook = document.getElementById("tagBook");
            let publisherDonate = document.getElementById("publisherDonate");
            let pagesDonate = document.getElementById("pagesDonate");
            let conditionDonate = document.getElementById("conditionDonate");
            let donatorDonate = document.getElementById("donatorDonate");
            var donationDate = new Date();
            var dd = donationDate.getDate();
            var mm = donationDate.getMonth()+1; //January is 0!
            var yyyy = donationDate.getFullYear();
            donationDate = dd + '/' + mm + '/' + yyyy;
            let libraryDonate = document.getElementById("libraryDonate");

            let newBook = new Book(donateTitle.value, donateCover.value, donateDescription.value, writerDonate.value, launchDateDonate.value, categoryBook.value, tagBook.value, publisherDonate.value, pagesDonate.value, conditionDonate.value, donatorDonate.value, donationDate, libraryDonate.value, "Dísponivel");
            books.push(newBook);
            saveLocalStorageBooks(); 
            alert("Livro inserido.");
            window.location.href = "books.html"; // redereciona para outra pagina   
             event.preventDefault();

        })
    }

     if(document.getElementById("formChooseUserToEliminar"))
    {
        
        let usersName = document.getElementById("usersName")
        for(var i = 0; i < users.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = users[i].name;
                opt.value = users[i].id;
                usersName.appendChild(opt);     
        }
    }

    let formChooseUserToEliminar = document.getElementById("formChooseUserToEliminar")
    // Delete User
    if(formChooseUserToEliminar){
        formChooseUserToEliminar.addEventListener("submit", function(event) { 
            let usersName = document.getElementById("usersName").value;
            users = users.slice(usersName);  // falta eliminar todos os requests deste utilizador e como neste algoritmo avançar todos os ids + 1
            for(var i = usersName-1; i < users.length; i++)
            {
               users[i+1].id =  users[i].id;    
            }

            alert("Utlizador eliminado.");
            saveLocalStorageUsers(); 
            window.location.href = "users.html"; // redereciona para outra pagina 
            event.preventDefault();     
        })
        event.preventDefault();
    }

    let formChooseUser = document.getElementById("formChooseUser")
    // Edit User
    if(formChooseUser){
        formChooseUser.addEventListener("submit", function(event) { 
            let usersName = document.getElementById("usersName");

            localStorage.setItem("editUser", usersName.value);
            window.location.href = "usersEditEdit.html"; // redereciona para outra pagina 
            event.preventDefault();     
        })
        event.preventDefault();
    }

     if(document.getElementById("formEditUser"))
    {
        document.getElementById("registerName").value = users[editUser].name;
        document.getElementById("registerEmail").value = users[editUser].email;
        document.getElementById("passwordRegister").value = users[editUser].password;
        document.getElementById("registerPhoto").src = users[editUser].photo;
        document.getElementById("permissions").value = users[editUser].type;
            
    }

    let formEditUser = document.getElementById("formEditUser")
    // Edit Edit User
    if(formEditUser){
        formEditUser.addEventListener("submit", function(event) { 

        users[editUser].name = document.getElementById("registerName").value;
        users[editUser].email = document.getElementById("registerEmail").value;
        users[editUser].password = document.getElementById("passwordRegister").value;
        users[editUser].photo = document.getElementById("registerPhoto").src;
        users[editUser].type = document.getElementById("permissions").value;
        
        localStorage.removeItem("editUser");
        alert("Utlizador editado.");
        saveLocalStorageUsers(); 
        window.location.href = "users.html"; // redereciona para outra pagina           

        event.preventDefault();
        })
    }

     if(document.getElementById("formTagAssociate"))
    {
         let booksList = document.getElementById("booksList")
        for(var i = 0; i < books.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = books[i].title;
                opt.value = i;
                booksList.appendChild(opt);     
        }

        let tagBook = document.getElementById("tagBook")
        for(var i = 0; i < booksTag.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = booksTag[i].tag;
                opt.value = booksTag[i].id;
                tagBook.appendChild(opt);     
        }
        tagBook.value = books[0].tagId;
            
    }

    let formTagAssociate = document.getElementById("formTagAssociate")
    // Associate User
    if(formTagAssociate){
        /*let booksList = document.getElementById("booksList")
        booksList.addEventListener("onchange", function(event) { 
                let tagBook = document.getElementById("tagBook")
                tagBook.value = books[booksList.value].tagId;
        })*/
        formTagAssociate.addEventListener("submit", function(event) { 
        let booksList = document.getElementById("booksList")

        books[booksList.value].tagId = document.getElementById("tagBook").value;
        
        alert("Tag e livros associados");
        saveLocalStorageBooks(); 
        window.location.href = "booksTag.html"; // redereciona para outra pagina           

        event.preventDefault();
        })
    }

    

    function renderTable(category = "", tag= "", writer = "", library = ""){
        let score = 0;
         let contador = 0; 
            let strHtml = "<thead class='thead-dark'><tr>" +
            "<th class='w-2'>#</th>" +
            "<th class='w-10' onclick='w3.sortHTML('#tblBooks', '#tblTitles', 'td:nth-child(2)')' style='cursor:pointer'>Título <i class='fas fa-angle-double-down'></i></th>" +
            "<th class='w-6'>Descrição</th>" +
            "<th class='w-5'>Data de Lançamento</th>" +
            "<th class='w-6'>Categoria</th>" +
            "<th class='w-6'>Tag</th>"+  
            "<th class='w-7'>Autor(es)</th>" +    
            "<th class='w-2'>Páginas</th>" +   
            "<th class='w-7'>Condição</th>" +   
            "<th class='w-5' onclick='w3.sortHTML('#tblBooks', '#tblDonationDate', 'td:nth-child(10)')' style='cursor:pointer'>Data em que o livro foi doado <i class='fas fa-angle-double-down'></i></th>" +   
            "<th class='w-8'>Endereço da Biblioteca</th>" +   
            "<th class='w-1' onclick='w3.sortHTML('#tblBooks', '#tblScore', 'td:nth-child(12)')' style='cursor:pointer'>Pontuação <i class='fas fa-angle-double-down'></i></th>" +
            "<th class='w-'>Dísponibilidade</th>" + 
            "</tr>" + 
            "</thead><tbody>"
            
            for (var i = 0; i < books.length; i++) {
                contador= 0;
                score = 0;
                        for (var j = 0; j < commentaries.length; j++) {
                            
                            if(books[i].id == commentaries[j].bookId){
                                contador += 1;
                                score += commentaries[j].score;
                            }
                        }
                        score = score/contador;

                        if (category==booksCategory[books[i].categoryId-1].category || category=="" || tag==booksTag[books[i].tagId-1].tag || tag=="" || writer==books[i].writer || writer=="" || library==books[i].libraryId || library=="") {
                                strHtml += "<tr>" +
                            "<td>" + books[i].id + "</td>" +
                            "<td id='tblTitles'>" + books[i].title + "</td>" +
                            "<td>" + books[i].description + "</td>" +
                            "<td>" + books[i].launch + "</td>" +
                            "<td>" + booksCategory[books[i].categoryId-1].category + "</td>" +
                            "<td>" + booksTag[books[i].tagId-1].tag + "</td>" +
                            "<td>" + books[i].writer + "</td>" +    
                            "<td>" + books[i].pages + "</td>" +     
                            "<td>" + books[i].condition + "</td>" +     
                            "<td id='tblDonationDate'>" + books[i].donationDate + "</td>" +     
                            "<td>" + libraries[books[i].libraryId-1].adress + "</td>" +    
                            "<td id='tblScore'>" + score + "</td>" +   
                             "<td id='tblScore'>" + books[i].libraryAvailable + "</td>" +                   
                            "</tr>" 
                    strHtml += "</tbody>"

                   document.getElementById("tblBooks").innerHTML = strHtml
                        }
            }
    }
}
$(document).ready(function() 
{
    $("#logout").click(function()
        {
           alert("Logout Bem Bucedido");
            localStorage.removeItem("loggedInUser");	
            localStorage.removeItem("loggedInUserPos");
            window.location.href = "landing.html"; // redereciona para outra pagina   	
        }); // end logout */
 });
function saveLocalStorage()
	{

        localStorage.setItem("usersTotal",users.length);
        localStorage.setItem("booksCTotal",booksCategory.length);
        localStorage.setItem("booksTTotal",booksTag.length);
        localStorage.setItem("librariesTotal",libraries.length);
        localStorage.setItem("booksTotal",books.length);
        localStorage.setItem("requestsTotal",requests.length);
        localStorage.setItem("commentariesTotal",commentaries.length);
        localStorage.setItem("notificationsTotal",notifications.length);
        localStorage.setItem("configMultasTotal",configMultas.length);
		for(var i = 0;i<users.length;i++)
			{
				localStorage.setItem(i.toString(),JSON.stringify(users[i]));
			}
        for(var i = 0;i<booksCategory.length;i++)
            {
                localStorage.setItem(i.toString() + "bc",JSON.stringify(booksCategory[i]));
            }
        for(var i = 0;i<booksTag.length;i++)
            {
                localStorage.setItem(i.toString() + "bt",JSON.stringify(booksTag[i]));
            }
        for(var i = 0;i<libraries.length;i++)
            {
                localStorage.setItem(i.toString() + "l",JSON.stringify(libraries[i]));
            }
        for(var i = 0;i<books.length;i++)
            {
                localStorage.setItem(i.toString() + "b",JSON.stringify(books[i]));
            }
        for(var i = 0;i<requests.length;i++)
            {
                localStorage.setItem(i.toString() + "r",JSON.stringify(requests[i]));
            }
        for(var i = 0;i<commentaries.length;i++)
            {
                localStorage.setItem(i.toString() + "c",JSON.stringify(commentaries[i]));
            }
        for(var i = 0;i<notifications.length;i++)
            {
                localStorage.setItem(i.toString() + "n",JSON.stringify(notifications[i]));
            }
            for(var i = 0;i<configMultas.length;i++)
            {
                localStorage.setItem(i.toString() + "cm",JSON.stringify(configMultas[i]));
            }
	} // end saveLocalStorage
	
function saveLocalStorageUsers()
{
    localStorage.setItem("usersTotal",users.length);
    for(var i = 0;i<users.length;i++)
        {
            localStorage.setItem(i.toString(),JSON.stringify(users[i]));
            //console.log(i.toString());
            //console.log(JSON.stringify(users[i]));
        }
} // end saveLocalStorageUsers

function saveLocalStorageBooksC()
{
    localStorage.setItem("booksCTotal",booksCategory.length);
    for(var i = 0;i<booksCategory.length;i++)
        {
            localStorage.setItem(i.toString() + "bc",JSON.stringify(booksCategory[i]));
        }
} // end saveLocalStorageBooksC

function saveLocalStorageBooksT()
{
    localStorage.setItem("booksTTotal",booksTag.length);
    for(var i = 0;i<booksTag.length;i++)
        {
            localStorage.setItem(i.toString() + "bt",JSON.stringify(booksTag[i]));
        }
} // end saveLocalStorageBooksT

function saveLocalStorageLibraries()
{
    localStorage.setItem("librariesTotal",libraries.length);
    for(var i = 0;i<libraries.length;i++)
        {
            localStorage.setItem(i.toString() + "l",JSON.stringify(libraries[i]));
        }
} // end saveLocalStorageLibraries

function saveLocalStorageBooks()
{
    localStorage.setItem("booksTotal",books.length);
    for(var i = 0;i<books.length;i++)
        {
            localStorage.setItem(i.toString() + "b",JSON.stringify(books[i]));
        }
} // end saveLocalStorageBooks

function saveLocalStorageRequests()
{
    localStorage.setItem("requestsTotal",requests.length);
    for(var i = 0;i<requests.length;i++)
        {
            localStorage.setItem(i.toString() + "r",JSON.stringify(requests[i]));
        }
} // end saveLocalStorageRequests

function saveLocalStorageCommentaries()
{
    localStorage.setItem("commentariesTotal",commentaries.length);
    for(var i = 0;i<commentaries.length;i++)
        {
            localStorage.setItem(i.toString() + "c",JSON.stringify(commentaries[i]));
        }
} // end saveLocalStorageCommentaries

function saveLocalStorageNotifications()
{
localStorage.setItem("notificationsTotal",notifications.length);
    for(var i = 0;i<notifications.length;i++)
        {
            localStorage.setItem(i.toString() + "n",JSON.stringify(notifications[i]));
        }
} // end saveLocalStorageNotifications

function saveLocalStorageConfigMultas()
{
    localStorage.setItem("configMultasTotal",configMultas.length);
    for(var i = 0;i<configMultas.length;i++)
        {
            localStorage.setItem(i.toString() + "cm",JSON.stringify(configMultas[i]));
        }
} // end saveLocalStorageConfigMultas

function loadLocalStorageUsers()
{
    let usersTotal = localStorage.getItem("usersTotal");
    for(var i = 0;i<usersTotal;i++)
    {
        users[i] =  JSON.parse(localStorage.getItem(i.toString()));
        //console.log(JSON.parse( localStorage.getItem(i.toString())));
    }
}

function loadLocalStorage()
{

let usersTotal = localStorage.getItem("usersTotal");
let booksCTotal = localStorage.getItem("booksCTotal");
let booksTTotal = localStorage.getItem("booksTTotal");
let librariesTotal = localStorage.getItem("librariesTotal");
let booksTotal = localStorage.getItem("booksTotal");
let requestsTotal = localStorage.getItem("requestsTotal");
let commentariesTotal = localStorage.getItem("commentariesTotal");
let notificationsTotal = localStorage.getItem("notificationsTotal");
let configMultasTotal = localStorage.getItem("configMultasTotal");
for(var i = 0;i<usersTotal;i++)
    {
        users[i] =  JSON.parse(localStorage.getItem(i.toString()));
        //console.log(JSON.parse( localStorage.getItem(i.toString())));
    }
for(var i = 0;i<booksCTotal;i++)
    {
        booksCategory[i] =  JSON.parse(localStorage.getItem(i.toString() + "bc"));
    }
for(var i = 0;i<booksTTotal;i++)
    {
        booksTag[i] =  JSON.parse(localStorage.getItem(i.toString() + "bt"));
    }
for(var i = 0;i<librariesTotal;i++)
    {
        libraries[i] =  JSON.parse(localStorage.getItem(i.toString() + "l"));
    }
for(var i = 0;i<booksTotal;i++)
    {
        books[i] =  JSON.parse(localStorage.getItem(i.toString() + "b"));
    }
for(var i = 0;i<requestsTotal;i++)
    {
        requests[i] =  JSON.parse(localStorage.getItem(i.toString() + "r"));
    }
for(var i = 0;i<commentariesTotal;i++)
    {
        commentaries[i] =  JSON.parse(localStorage.getItem(i.toString() + "c"));
    }
for(var i = 0;i<notificationsTotal;i++)
    {
        notifications[i] =  JSON.parse(localStorage.getItem(i.toString() + "n"));
    }
for(var i = 0;i<configMultasTotal;i++)
    {
        configMultas[i] =  JSON.parse(localStorage.getItem(i.toString() + "cm"));
    }
} // end loadLocalStorage
