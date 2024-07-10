var _available_translations = ['en', 'ru', 'de', 'es', 'fr', 'hi', 'id', 'pt', 'th', 'tr', 'uz', 'vi'];
var _translations = {
    en: {
        menu: {
            home: "Home",
            actives: "Actives",
            friends: "Friends",
            boost: "Boost",
            airdrop: "Airdrop",
        },
        levels: {
            1: {
                name: "Beginner",
                score: "0 - 5K"
            },
            2: {
                name: "Conservative",
                score: "5K - 25K"
            },
            3: {
                name: "Moderate",
                score: "25K - 100K"
            },
            4: {
                name: "Rational",
                score: "100K - 1M"
            },
            5: {
                name: "Speculative",
                score: "1M - 10M"
            },
            6: {
                name: "Aggressive",
                score: "10M - 50M"
            },
            7: {
                name: "Enterprise",
                score: "from 50M"
            }
        },
        home: {
            level: "Level",
            investments_count: "Actives",
            investments_const: "Investments amount",
            profit: "Profit",
            pnl: "PNL",
            rounds: "Rounds",
            directions: "Directions",
            projects: "Projects",
            specials: "Special",
            ranking: "Your rank",
            change_lang: "Select language",
            offline_income_title: "Your income",
            offline_income_cta: "Check out the app more often!",
            offline_income_close: "OK",
        },
        actives: {
            title: "Invest<br>and gain profit",
            rounds: "Rounds",
            directions: "Directions",
            projects: "Projects",
            specials: "Special",
            level: "Level",
            income: "Income",
            price: "Price",
            upgrade: "Upgrade",
            header_actives: "Actives",
            header_income: "Income",
            toast_success: "Active successfully upgraded",
            toast_fail: "Active upgrade failed",
            modal_invested: "Invested",
            modal_profit: "Profit",
            daily_card: "Daily card",
            daily_card_title: "Sharpen your mind and earn",
            daily_answer_correct: "Correct! You've earned:",
            daily_answer_wrong: "Mistake! Correct answer:",
        },
        friends: {
            title: "Invite friends and<br>get bonuses!",
            invite_button: "Invite friend",
            one_friend_title: "Invite friend",
            one_friend_bonus: "for each friend",
            three_friend_title: "Invite 3 friends",
            five_friend_title: "Invite 5 friends",
            invite_spin: "Spin",
            invite_wheel: "wheel of fortune",
            invite_3: "every 24 hours",
            invite_5: "every 12 hours",
            friends_list_title: "List of your friends",
            url_copied: "URL copied"
        },
        boost: {
            title: "Earn more coins",
            button: "Spin",
            button_invite: "Invitations remaining",
            task_list_title: "Task list",
            promocode: "Promocode",
            promocode_button: "Apply",
            promocode_success: "Promocode applied! Received ",
            promocode_error: "Promocode application failed",
            spin_success: "You won:",
            spin_error: "Error"
        },
        airdrop: {
            title: "Airdrop",
            text: "After ending of the first season the token will be listed.<br><br>Right now you can send some of your points for charity.",
            placeholder: "Amount",
            button: "Send",
            success: "Donation sent",
            error: "Donation failed",
            error_insufficient_funds: "Not enough coins to donate"
        }
    },
    ru: {
        menu: {
            home: "Главная",
            actives: "Активы",
            friends: "Друзья",
            boost: "Буст",
            airdrop: "Airdrop",
        },
        levels: {
            1: {
                name: "Начинающий",
                score: "0 - 5K"
            },
            2: {
                name: "Консервативный",
                score: "5K - 25K"
            },
            3: {
                name: "Умеренный",
                score: "25K - 100K"
            },
            4: {
                name: "Рациональный",
                score: "100K - 1M"
            },
            5: {
                name: "Спекулятивный",
                score: "1M - 10M"
            },
            6: {
                name: "Агрессивный",
                score: "10M - 50M"
            },
            7: {
                name: "Корпоративный",
                score: "от 50M"
            }
        },
        home: {
            level: "Уровень",
            investments_count: "Активы",
            investments_const: "Объем инвестиций",
            profit: "Профит",
            pnl: "PNL",
            rounds: "Раунды",
            directions: "Сферы",
            projects: "Проекты",
            specials: "Особые",
            ranking: "Ваше место",
            change_lang: "Выберите язык",
            offline_income_title: "Ваш доход составил",
            offline_income_cta: "Чаще заходите в приложение!",
            offline_income_close: "OK",
        },
        actives: {
            title: "Инвестируй<br>и получай доход",
            rounds: "Раунды",
            directions: "Сферы",
            projects: "Проекты",
            specials: "Особые",
            level: "Уровень",
            income: "Доход",
            price: "Цена",
            upgrade: "Улучшить",
            header_actives: "Активы",
            header_income: "Доход",
            toast_success: "Актив успешно улучшен",
            toast_fail: "Не удалось улучшить актив",
            modal_invested: "Инвестировано",
            modal_profit: "Доход",
            daily_card: "Карточка дня",
            daily_card_title: "Прокачай ум и получи",
            daily_answer_correct: "Правильно! Получено:",
            daily_answer_wrong: "Неверно! Правильный ответ:",
        },
        friends: {
            title: "Приглашай друзей и<br>получай бонусы",
            invite_button: "Пригласить друга",
            one_friend_title: "Пригласи друга",
            one_friend_bonus: "за каждого друга",
            three_friend_title: "Пригласи 3 друзей",
            five_friend_title: "Пригласи 5 друзей",
            invite_spin: "Крути",
            invite_wheel: "колесо фортуны",
            invite_3: "каждые 24 часа",
            invite_5: "каждые 12 часов",
            friends_list_title: "Твои друзья",
            url_copied: "Ссылка скопирована",
        },
        boost: {
            title: "Заработай больше<br>монет",
            button: "Крутить",
            button_invite: "Осталось приглашений",
            task_list_title: "Список заданий",
            promocode: "Промокод",
            promocode_button: "Применить",
            promocode_success: "Промокод применен! Получено",
            promocode_error: "Не удалось применить промокод",
            spin_success: "Вы выиграли:",
            spin_error: "Ошибка"
        },
        airdrop: {
            title: "Airdrop",
            text: "После окончания первого сезона состоится листинг.<br><br>Сейчас вы можете отправить часть своих поинтов в фонд на благотворительность.",
            button: "Отправить",
            placeholder: "Введите сумму",
            success: "Пожертвование отправлено",
            error: "Пожертвование не отправлено",
            error_insufficient_funds: "Недостаточно поинтов"
        }
    },
    de: {
        "menu": {
            "home": "Startseite",
            "actives": "Aktive",
            "friends": "Freunde",
            "boost": "Boost",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Anfänger",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Konservativ",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Mittel",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Rational",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Spekulativ",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Aggressiv",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Unternehmen",
                "score": "ab 50M"
            }
        },
        "home": {
            "level": "Stufe",
            "investments_count": "Aktive",
            "investments_const": "Investitionsbetrag",
            "profit": "Gewinn",
            "pnl": "PNL",
            "rounds": "Runden",
            "directions": "Richtungen",
            "projects": "Projekte",
            "specials": "Spezial",
            "ranking": "Dein Rang",
            "change_lang": "Sprache auswählen",
            "offline_income_title": "Dein Einkommen",
            "offline_income_cta": "Schau öfter in die App!",
            "offline_income_close": "OK",
        },
        "actives": {
            "title": "Investiere<br>und erziele Gewinn",
            "rounds": "Runden",
            "directions": "Richtungen",
            "projects": "Projekte",
            "specials": "Spezial",
            "level": "Stufe",
            "income": "Einkommen",
            "price": "Preis",
            "upgrade": "Upgrade",
            "header_actives": "Aktive",
            "header_income": "Einkommen",
            "toast_success": "Aktive erfolgreich aufgerüstet",
            "toast_fail": "Aktives Upgrade fehlgeschlagen",
            "modal_invested": "Investiert",
            "modal_profit": "Gewinn",
            "daily_card": "Tageskarte",
            "daily_card_title": "Schärfe deinen Verstand und verdiene",
            "daily_answer_correct": "Richtig! Du hast verdient:",
            "daily_answer_wrong": "Fehler! Richtige Antwort:"
        },
        "friends": {
            "title": "Freunde einladen und<br>Bonus erhalten!",
            "invite_button": "Freund einladen",
            "one_friend_title": "Freund einladen",
            "one_friend_bonus": "für jeden Freund",
            "three_friend_title": "3 Freunde einladen",
            "five_friend_title": "5 Freunde einladen",
            "invite_spin": "Drehen",
            "invite_wheel": "Glücksrad",
            "invite_3": "alle 24 Stunden",
            "invite_5": "alle 12 Stunden",
            "friends_list_title": "Liste deiner Freunde",
            "url_copied": "URL kopiert"
        },
        "boost": {
            "title": "Mehr Münzen verdienen",
            "button": "Drehen",
            "button_invite": "Einladungen verbleibend",
            "task_list_title": "Aufgabenliste",
            "promocode": "Promocode",
            "promocode_button": "Anwenden",
            "promocode_success": "Promocode angewendet! Erhalten ",
            "promocode_error": "Promocode-Anwendung fehlgeschlagen",
            "spin_success": "Du hast gewonnen:",
            "spin_error": "Fehler"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Nach dem Ende der ersten Saison wird der Token gelistet.<br><br>Im Moment kannst du einige deiner Punkte für wohltätige Zwecke spenden.",
            "placeholder": "Betrag",
            "button": "Senden",
            "success": "Spende gesendet",
            "error": "Spende fehlgeschlagen",
            "error_insufficient_funds": "Nicht genügend Münzen zum Spenden"
        }
    },
    es: {
        "menu": {
            "home": "Inicio",
            "actives": "Activos",
            "friends": "Amigos",
            "boost": "Aumentar",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Principiante",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Conservador",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Moderado",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Racional",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Especulativo",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agresivo",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Empresarial",
                "score": "desde 50M"
            }
        },
        "home": {
            "level": "Nivel",
            "investments_count": "Activos",
            "investments_const": "Monto de inversiones",
            "profit": "Ganancia",
            "pnl": "PNL",
            "rounds": "Rondas",
            "directions": "Direcciones",
            "projects": "Proyectos",
            "specials": "Especial",
            "ranking": "Tu rango",
            "change_lang": "Seleccionar idioma",
            "offline_income_title": "Tu ingreso",
            "offline_income_cta": "¡Revisa la aplicación más a menudo!",
            "offline_income_close": "OK"
        },
        "actives": {
            "title": "Invierte<br>y gana beneficios",
            "rounds": "Rondas",
            "directions": "Direcciones",
            "projects": "Proyectos",
            "specials": "Especial",
            "level": "Nivel",
            "income": "Ingresos",
            "price": "Precio",
            "upgrade": "Mejorar",
            "header_actives": "Activos",
            "header_income": "Ingresos",
            "toast_success": "Activo mejorado con éxito",
            "toast_fail": "Falló la mejora del activo",
            "modal_invested": "Invertido",
            "modal_profit": "Ganancia",
            "daily_card": "Tarjeta diaria",
            "daily_card_title": "Agudiza tu mente y gana",
            "daily_answer_correct": "¡Correcto! Has ganado:",
            "daily_answer_wrong": "¡Error! Respuesta correcta:"
        },
        "friends": {
            "title": "¡Invita a amigos y<br>obtén bonificaciones!",
            "invite_button": "Invitar amigo",
            "one_friend_title": "Invitar amigo",
            "one_friend_bonus": "por cada amigo",
            "three_friend_title": "Invitar a 3 amigos",
            "five_friend_title": "Invitar a 5 amigos",
            "invite_spin": "Girar",
            "invite_wheel": "rueda de la fortuna",
            "invite_3": "cada 24 horas",
            "invite_5": "cada 12 horas",
            "friends_list_title": "Lista de tus amigos",
            "url_copied": "URL copiada"
        },
        "boost": {
            "title": "Gana más monedas",
            "button": "Girar",
            "button_invite": "Invitaciones restantes",
            "task_list_title": "Lista de tareas",
            "promocode": "Código promocional",
            "promocode_button": "Aplicar",
            "promocode_success": "¡Código promocional aplicado! Recibido ",
            "promocode_error": "Falló la aplicación del código promocional",
            "spin_success": "Ganaste:",
            "spin_error": "Error"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Después del final de la primera temporada, el token será listado.<br><br>En este momento puedes enviar algunos de tus puntos a la caridad.",
            "placeholder": "Cantidad",
            "button": "Enviar",
            "success": "Donación enviada",
            "error": "Falló la donación",
            "error_insufficient_funds": "No tienes suficientes monedas para donar"
        }
    },
    fr: {
        "menu": {
            "home": "Accueil",
            "actives": "Actifs",
            "friends": "Amis",
            "boost": "Boost",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Débutant",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Conservateur",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Modéré",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Rationnel",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Spéculatif",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agressif",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Entreprise",
                "score": "à partir de 50M"
            }
        },
        "home": {
            "level": "Niveau",
            "investments_count": "Actifs",
            "investments_const": "Montant des investissements",
            "profit": "Profit",
            "pnl": "PNL",
            "rounds": "Tours",
            "directions": "Directions",
            "projects": "Projets",
            "specials": "Spécial",
            "ranking": "Votre rang",
            "change_lang": "Choisir la langue",
            "offline_income_title": "Vos revenus",
            "offline_income_cta": "Consultez l'application plus souvent!",
            "offline_income_close": "OK",
        },
        "actives": {
            "title": "Investir<br>et réaliser un profit",
            "rounds": "Tours",
            "directions": "Directions",
            "projects": "Projets",
            "specials": "Spécial",
            "level": "Niveau",
            "income": "Revenu",
            "price": "Prix",
            "upgrade": "Améliorer",
            "header_actives": "Actifs",
            "header_income": "Revenu",
            "toast_success": "Actif amélioré avec succès",
            "toast_fail": "Échec de l'amélioration de l'actif",
            "modal_invested": "Investi",
            "modal_profit": "Profit",
            "daily_card": "Carte quotidienne",
            "daily_card_title": "Aiguisez votre esprit et gagnez",
            "daily_answer_correct": "Correct! Vous avez gagné:",
            "daily_answer_wrong": "Erreur! Réponse correcte:"
        },
        "friends": {
            "title": "Invitez des amis et<br>obtenez des bonus!",
            "invite_button": "Inviter un ami",
            "one_friend_title": "Inviter un ami",
            "one_friend_bonus": "pour chaque ami",
            "three_friend_title": "Inviter 3 amis",
            "five_friend_title": "Inviter 5 amis",
            "invite_spin": "Tourner",
            "invite_wheel": "roue de la fortune",
            "invite_3": "toutes les 24 heures",
            "invite_5": "toutes les 12 heures",
            "friends_list_title": "Liste de vos amis",
            "url_copied": "URL copiée"
        },
        "boost": {
            "title": "Gagnez plus de pièces",
            "button": "Tourner",
            "button_invite": "Invitations restantes",
            "task_list_title": "Liste des tâches",
            "promocode": "Code promo",
            "promocode_button": "Appliquer",
            "promocode_success": "Code promo appliqué! Reçu ",
            "promocode_error": "Échec de l'application du code promo",
            "spin_success": "Vous avez gagné:",
            "spin_error": "Erreur"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Après la fin de la première saison, le token sera listé.<br><br>En ce moment, vous pouvez envoyer certains de vos points à des œuvres de charité.",
            "placeholder": "Montant",
            "button": "Envoyer",
            "success": "Don envoyé",
            "error": "Échec de l'envoi du don",
            "error_insufficient_funds": "Pas assez de pièces pour faire un don"
        }
    },
    hi: {
        "menu": {
            "home": "मुख्य पृष्ठ",
            "actives": "सक्रिय",
            "friends": "दोस्त",
            "boost": "बूस्ट",
            "airdrop": "एयरड्रॉप"
        },
        "levels": {
            "1": {
                "name": "शुरुआती",
                "score": "0 - 5K"
            },
            "2": {
                "name": "संरक्षक",
                "score": "5K - 25K"
            },
            "3": {
                "name": "मध्यम",
                "score": "25K - 100K"
            },
            "4": {
                "name": "तार्किक",
                "score": "100K - 1M"
            },
            "5": {
                "name": "सट्टेबाज",
                "score": "1M - 10M"
            },
            "6": {
                "name": "आक्रामक",
                "score": "10M - 50M"
            },
            "7": {
                "name": "उद्यम",
                "score": "50M से"
            }
        },
        "home": {
            "level": "स्तर",
            "investments_count": "सक्रिय",
            "investments_const": "निवेश राशि",
            "profit": "लाभ",
            "pnl": "पीएनएल",
            "rounds": "राउंड्स",
            "directions": "दिशाएं",
            "projects": "प्रोजेक्ट्स",
            "specials": "विशेष",
            "ranking": "आपकी रैंक",
            "change_lang": "भाषा चुनें",
            "offline_income_title": "आपकी आय",
            "offline_income_cta": "ऐप को अधिक बार देखें!",
            "offline_income_close": "ठीक है",
        },
        "actives": {
            "title": "निवेश करें<br>और लाभ कमाएं",
            "rounds": "राउंड्स",
            "directions": "दिशाएं",
            "projects": "प्रोजेक्ट्स",
            "specials": "विशेष",
            "level": "स्तर",
            "income": "आय",
            "price": "मूल्य",
            "upgrade": "उन्नयन",
            "header_actives": "सक्रिय",
            "header_income": "आय",
            "toast_success": "सक्रिय सफलतापूर्वक उन्नत किया गया",
            "toast_fail": "सक्रिय उन्नयन विफल",
            "modal_invested": "निवेशित",
            "modal_profit": "लाभ",
            "daily_card": "दैनिक कार्ड",
            "daily_card_title": "अपने दिमाग को तेज करें और कमाएँ",
            "daily_answer_correct": "सही! आपने कमाया:",
            "daily_answer_wrong": "गलती! सही उत्तर:"
        },
        "friends": {
            "title": "दोस्तों को आमंत्रित करें और<br>बोनस प्राप्त करें!",
            "invite_button": "दोस्त को आमंत्रित करें",
            "one_friend_title": "दोस्त को आमंत्रित करें",
            "one_friend_bonus": "प्रत्येक दोस्त के लिए",
            "three_friend_title": "3 दोस्तों को आमंत्रित करें",
            "five_friend_title": "5 दोस्तों को आमंत्रित करें",
            "invite_spin": "स्पिन करें",
            "invite_wheel": "भाग्य चक्र",
            "invite_3": "हर 24 घंटे",
            "invite_5": "हर 12 घंटे",
            "friends_list_title": "आपके दोस्तों की सूची",
            "url_copied": "URL कॉपी हो गया"
        },
        "boost": {
            "title": "अधिक सिक्के कमाएं",
            "button": "स्पिन करें",
            "button_invite": "शेष आमंत्रण",
            "task_list_title": "कार्य सूची",
            "promocode": "प्रोमोकोड",
            "promocode_button": "लागू करें",
            "promocode_success": "प्रोमोकोड लागू हुआ! प्राप्त ",
            "promocode_error": "प्रोमोकोड लागू करना विफल",
            "spin_success": "आपने जीता:",
            "spin_error": "त्रुटि"
        },
        "airdrop": {
            "title": "एयरड्रॉप",
            "text": "पहले सीज़न के अंत के बाद टोकन सूचीबद्ध होगा।<br><br>अभी आप कुछ अपने पॉइंट्स दान कर सकते हैं।",
            "placeholder": "राशि",
            "button": "भेजें",
            "success": "दान भेजा गया",
            "error": "दान विफल",
            "error_insufficient_funds": "दान के लिए पर्याप्त सिक्के नहीं हैं"
        }
    },
    id: {
        "menu": {
            "home": "Beranda",
            "actives": "Aktif",
            "friends": "Teman",
            "boost": "Boost",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Pemula",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Konservatif",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Moderat",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Rasional",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Spekulatif",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agresif",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Perusahaan",
                "score": "dari 50M"
            }
        },
        "home": {
            "level": "Tingkat",
            "investments_count": "Aktif",
            "investments_const": "Jumlah investasi",
            "profit": "Keuntungan",
            "pnl": "PNL",
            "rounds": "Putaran",
            "directions": "Arah",
            "projects": "Proyek",
            "specials": "Spesial",
            "ranking": "Peringkat Anda",
            "change_lang": "Pilih bahasa",
            "offline_income_title": "Penghasilan Anda",
            "offline_income_cta": "Periksa aplikasi lebih sering!",
            "offline_income_close": "OK"
        },
        "actives": {
            "title": "Investasi<br>dan dapatkan keuntungan",
            "rounds": "Putaran",
            "directions": "Arah",
            "projects": "Proyek",
            "specials": "Spesial",
            "level": "Tingkat",
            "income": "Pendapatan",
            "price": "Harga",
            "upgrade": "Upgrade",
            "header_actives": "Aktif",
            "header_income": "Pendapatan",
            "toast_success": "Aktif berhasil diupgrade",
            "toast_fail": "Upgrade aktif gagal",
            "modal_invested": "Diinvestasikan",
            "modal_profit": "Keuntungan",
            "daily_card": "Kartu harian",
            "daily_card_title": "Asah pikiranmu dan dapatkan",
            "daily_answer_correct": "Benar! Anda mendapatkan:",
            "daily_answer_wrong": "Salah! Jawaban yang benar:"
        },
        "friends": {
            "title": "Undang teman dan<br>dapatkan bonus!",
            "invite_button": "Undang teman",
            "one_friend_title": "Undang teman",
            "one_friend_bonus": "untuk setiap teman",
            "three_friend_title": "Undang 3 teman",
            "five_friend_title": "Undang 5 teman",
            "invite_spin": "Putar",
            "invite_wheel": "roda keberuntungan",
            "invite_3": "setiap 24 jam",
            "invite_5": "setiap 12 jam",
            "friends_list_title": "Daftar teman Anda",
            "url_copied": "URL disalin"
        },
        "boost": {
            "title": "Dapatkan lebih banyak koin",
            "button": "Putar",
            "button_invite": "Sisa undangan",
            "task_list_title": "Daftar tugas",
            "promocode": "Kode promo",
            "promocode_button": "Terapkan",
            "promocode_success": "Kode promo diterapkan! Diterima ",
            "promocode_error": "Penerapan kode promo gagal",
            "spin_success": "Anda menang:",
            "spin_error": "Kesalahan"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Setelah akhir musim pertama, token akan terdaftar.<br><br>Saat ini, Anda dapat mengirim beberapa poin Anda untuk amal.",
            "placeholder": "Jumlah",
            "button": "Kirim",
            "success": "Donasi terkirim",
            "error": "Donasi gagal",
            "error_insufficient_funds": "Koin tidak cukup untuk donasi"
        }
    },
    pt: {
        "menu": {
            "home": "Início",
            "actives": "Ativos",
            "friends": "Amigos",
            "boost": "Impulsionar",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Iniciante",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Conservador",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Moderado",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Racional",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Especulativo",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agressivo",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Empresa",
                "score": "a partir de 50M"
            }
        },
        "home": {
            "level": "Nível",
            "investments_count": "Ativos",
            "investments_const": "Quantidade de investimentos",
            "profit": "Lucro",
            "pnl": "PNL",
            "rounds": "Rodadas",
            "directions": "Direções",
            "projects": "Projetos",
            "specials": "Especial",
            "ranking": "Sua classificação",
            "change_lang": "Selecionar idioma",
            "offline_income_title": "Seu rendimento",
            "offline_income_cta": "Verifique o aplicativo com mais frequência!",
            "offline_income_close": "OK"
        },
        "actives": {
            "title": "Invista<br>e obtenha lucro",
            "rounds": "Rodadas",
            "directions": "Direções",
            "projects": "Projetos",
            "specials": "Especial",
            "level": "Nível",
            "income": "Renda",
            "price": "Preço",
            "upgrade": "Atualizar",
            "header_actives": "Ativos",
            "header_income": "Renda",
            "toast_success": "Ativo atualizado com sucesso",
            "toast_fail": "Falha na atualização do ativo",
            "modal_invested": "Investido",
            "modal_profit": "Lucro",
            "daily_card": "Carta diária",
            "daily_card_title": "Afie sua mente e ganhe",
            "daily_answer_correct": "Correto! Você ganhou:",
            "daily_answer_wrong": "Erro! Resposta correta:"
        },
        "friends": {
            "title": "Convide amigos e<br>ganhe bônus!",
            "invite_button": "Convidar amigo",
            "one_friend_title": "Convidar amigo",
            "one_friend_bonus": "para cada amigo",
            "three_friend_title": "Convidar 3 amigos",
            "five_friend_title": "Convidar 5 amigos",
            "invite_spin": "Girar",
            "invite_wheel": "roda da fortuna",
            "invite_3": "a cada 24 horas",
            "invite_5": "a cada 12 horas",
            "friends_list_title": "Lista de seus amigos",
            "url_copied": "URL copiada"
        },
        "boost": {
            "title": "Ganhe mais moedas",
            "button": "Girar",
            "button_invite": "Convites restantes",
            "task_list_title": "Lista de tarefas",
            "promocode": "Código promocional",
            "promocode_button": "Aplicar",
            "promocode_success": "Código promocional aplicado! Recebido ",
            "promocode_error": "Falha na aplicação do código promocional",
            "spin_success": "Você ganhou:",
            "spin_error": "Erro"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Após o término da primeira temporada, o token será listado.<br><br>No momento, você pode enviar alguns de seus pontos para a caridade.",
            "placeholder": "Quantidade",
            "button": "Enviar",
            "success": "Doação enviada",
            "error": "Falha na doação",
            "error_insufficient_funds": "Moedas insuficientes para doar"
        }
    },
    th: {
        "menu": {
            "home": "หน้าแรก",
            "actives": "ใช้งานอยู่",
            "friends": "เพื่อน",
            "boost": "บูสต์",
            "airdrop": "แอร์ดรอป"
        },
        "levels": {
            "1": {
                "name": "ผู้เริ่มต้น",
                "score": "0 - 5K"
            },
            "2": {
                "name": "อนุรักษ์นิยม",
                "score": "5K - 25K"
            },
            "3": {
                "name": "ปานกลาง",
                "score": "25K - 100K"
            },
            "4": {
                "name": "มีเหตุผล",
                "score": "100K - 1M"
            },
            "5": {
                "name": "เก็งกำไร",
                "score": "1M - 10M"
            },
            "6": {
                "name": "เชิงรุก",
                "score": "10M - 50M"
            },
            "7": {
                "name": "บริษัท",
                "score": "จาก 50M"
            }
        },
        "home": {
            "level": "ระดับ",
            "investments_count": "ใช้งานอยู่",
            "investments_const": "จำนวนการลงทุน",
            "profit": "กำไร",
            "pnl": "PNL",
            "rounds": "รอบ",
            "directions": "ทิศทาง",
            "projects": "โครงการ",
            "specials": "พิเศษ",
            "ranking": "อันดับของคุณ",
            "change_lang": "เลือกภาษา",
            "offline_income_title": "รายได้ของคุณ",
            "offline_income_cta": "ตรวจสอบแอปบ่อยขึ้น!",
            "offline_income_close": "ตกลง"
        },
        "actives": {
            "title": "ลงทุน<br>และรับกำไร",
            "rounds": "รอบ",
            "directions": "ทิศทาง",
            "projects": "โครงการ",
            "specials": "พิเศษ",
            "level": "ระดับ",
            "income": "รายได้",
            "price": "ราคา",
            "upgrade": "อัปเกรด",
            "header_actives": "ใช้งานอยู่",
            "header_income": "รายได้",
            "toast_success": "อัปเกรดการใช้งานสำเร็จ",
            "toast_fail": "อัปเกรดการใช้งานล้มเหลว",
            "modal_invested": "ลงทุน",
            "modal_profit": "กำไร",
            "daily_card": "การ์ดรายวัน",
            "daily_card_title": "ฝึกสมองและรับ",
            "daily_answer_correct": "ถูกต้อง! คุณได้รับ:",
            "daily_answer_wrong": "ผิดพลาด! คำตอบที่ถูกต้อง:"
        },
        "friends": {
            "title": "เชิญเพื่อนและ<br>รับโบนัส!",
            "invite_button": "เชิญเพื่อน",
            "one_friend_title": "เชิญเพื่อน",
            "one_friend_bonus": "สำหรับเพื่อนแต่ละคน",
            "three_friend_title": "เชิญเพื่อน 3 คน",
            "five_friend_title": "เชิญเพื่อน 5 คน",
            "invite_spin": "หมุน",
            "invite_wheel": "วงล้อแห่งโชคชะตา",
            "invite_3": "ทุกๆ 24 ชั่วโมง",
            "invite_5": "ทุกๆ 12 ชั่วโมง",
            "friends_list_title": "รายชื่อเพื่อนของคุณ",
            "url_copied": "คัดลอก URL แล้ว"
        },
        "boost": {
            "title": "รับเหรียญเพิ่ม",
            "button": "หมุน",
            "button_invite": "คำเชิญที่เหลือ",
            "task_list_title": "รายการงาน",
            "promocode": "รหัสโปรโมชั่น",
            "promocode_button": "ใช้",
            "promocode_success": "ใช้รหัสโปรโมชั่นแล้ว! ได้รับ ",
            "promocode_error": "การใช้รหัสโปรโมชั่นล้มเหลว",
            "spin_success": "คุณชนะ:",
            "spin_error": "ข้อผิดพลาด"
        },
        "airdrop": {
            "title": "แอร์ดรอป",
            "text": "หลังจากสิ้นสุดฤดูกาลแรก โทเค็นจะถูกลิสต์<br><br>ตอนนี้คุณสามารถส่งคะแนนบางส่วนของคุณเพื่อการกุศลได้",
            "placeholder": "จำนวน",
            "button": "ส่ง",
            "success": "ส่งการบริจาคแล้ว",
            "error": "การบริจาคล้มเหลว",
            "error_insufficient_funds": "เหรียญไม่เพียงพอสำหรับการบริจาค"
        }
    },
    tr: {
        "menu": {
            "home": "Ana Sayfa",
            "actives": "Aktifler",
            "friends": "Arkadaşlar",
            "boost": "Destek",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Başlangıç",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Koruyucu",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Orta Seviye",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Mantıklı",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Spekülatif",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agresif",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Kurumsal",
                "score": " ve üzeri 50M"
            }
        },
        "home": {
            "level": "Seviye",
            "investments_count": "Aktifler",
            "investments_const": "Yatırım Miktarı",
            "profit": "Kar",
            "pnl": "PNL",
            "rounds": "Turlar",
            "directions": "Yönler",
            "projects": "Projeler",
            "specials": "Özel",
            "ranking": "Sıralamanız",
            "change_lang": "Dil Seçin",
            "offline_income_title": "Geliriniz",
            "offline_income_cta": "Uygulamayı daha sık kontrol edin!",
            "offline_income_close": "Tamam",
        },
        "actives": {
            "title": "Yatırım Yap<br>ve Kar Kazan",
            "rounds": "Turlar",
            "directions": "Yönler",
            "projects": "Projeler",
            "specials": "Özel",
            "level": "Seviye",
            "income": "Gelir",
            "price": "Fiyat",
            "upgrade": "Yükselt",
            "header_actives": "Aktifler",
            "header_income": "Gelir",
            "toast_success": "Aktif başarıyla yükseltildi",
            "toast_fail": "Aktif yükseltme başarısız",
            "modal_invested": "Yatırılan",
            "modal_profit": "Kar",
            "daily_card": "Günlük Kart",
            "daily_card_title": "Zihnini keskinleştir ve kazan",
            "daily_answer_correct": "Doğru! Kazandınız:",
            "daily_answer_wrong": "Hata! Doğru cevap:"
        },
        "friends": {
            "title": "Arkadaşları Davet Et<br>ve Bonus Kazan!",
            "invite_button": "Arkadaş Davet Et",
            "one_friend_title": "Arkadaş Davet Et",
            "one_friend_bonus": "her bir arkadaş için",
            "three_friend_title": "3 Arkadaş Davet Et",
            "five_friend_title": "5 Arkadaş Davet Et",
            "invite_spin": "Çevir",
            "invite_wheel": "şans çarkı",
            "invite_3": "her 24 saatte bir",
            "invite_5": "her 12 saatte bir",
            "friends_list_title": "Arkadaşlarınızın Listesi",
            "url_copied": "URL kopyalandı"
        },
        "boost": {
            "title": "Daha Fazla Coin Kazanın",
            "button": "Çevir",
            "button_invite": "Kalan Davetler",
            "task_list_title": "Görevler Listesi",
            "promocode": "Promosyon Kodu",
            "promocode_button": "Uygula",
            "promocode_success": "Promosyon kodu uygulandı! Aldınız ",
            "promocode_error": "Promosyon kodu uygulama hatası",
            "spin_success": "Kazandınız:",
            "spin_error": "Hata"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Birinci sezonun sonunda token listelenecek.<br><br>Şu anda bazı puanlarınızı hayır kurumlarına gönderebilirsiniz.",
            "placeholder": "Miktar",
            "button": "Gönder",
            "success": "Bağışlama gönderildi",
            "error": "Bağışlama başarısız",
            "error_insufficient_funds": "Bağış yapmak için yeterli coin yok"
        }
    },
    uz: {
        "menu": {
            "home": "Bosh sahifa",
            "actives": "Faoliyatlar",
            "friends": "Do‘stlar",
            "boost": "Ko‘tarish",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Boshlovchi",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Sakchil",
                "score": "5K - 25K"
            },
            "3": {
                "name": "O‘rta",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Mantiqiy",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Spekulyativ",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Agresiv",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Korporativ",
                "score": "50M  va yuqori"
            }
        },
        "home": {
            "level": "Daraja",
            "investments_count": "Faoliyatlar",
            "investments_const": "Investitsiya miqdori",
            "profit": "Foyda",
            "pnl": "PNL",
            "rounds": "Turlar",
            "directions": "Yo‘nalishlar",
            "projects": "Loyihalar",
            "specials": "Maxsus",
            "ranking": "Sizning reytingingiz",
            "change_lang": "Tilni tanlang",
            "offline_income_title": "Daromadingiz",
            "offline_income_cta": "Ilovaga ko'proq qarang!",
            "offline_income_close": "OK"
        },
        "actives": {
            "title": "Sarmoya qiling<br>va foyda oling",
            "rounds": "Turlar",
            "directions": "Yo‘nalishlar",
            "projects": "Loyihalar",
            "specials": "Maxsus",
            "level": "Daraja",
            "income": "Daromad",
            "price": "Narx",
            "upgrade": "Yangilash",
            "header_actives": "Faoliyatlar",
            "header_income": "Daromad",
            "toast_success": "Faoliyat muvaffaqiyatli yangilandi",
            "toast_fail": "Faoliyat yangilanishi muvaffaqiyatsiz",
            "modal_invested": "Sarmoya qilingan",
            "modal_profit": "Foyda",
            "daily_card": "Kunlik karta",
            "daily_card_title": "Aqlingizni charxlang va oling",
            "daily_answer_correct": "To‘g‘ri! Siz yutdingiz:",
            "daily_answer_wrong": "Xato! To‘g‘ri javob:"
        },
        "friends": {
            "title": "Do‘stlarni taklif et<br>va bonuslar oling!",
            "invite_button": "Do‘stni taklif et",
            "one_friend_title": "Do‘stni taklif et",
            "one_friend_bonus": "har bir do‘st uchun",
            "three_friend_title": "3 do‘stni taklif et",
            "five_friend_title": "5 do‘stni taklif et",
            "invite_spin": "Aylantirish",
            "invite_wheel": "taqdir g‘ildiragi",
            "invite_3": "har 24 soatda",
            "invite_5": "har 12 soatda",
            "friends_list_title": "Do‘stlaringiz ro‘yxati",
            "url_copied": "URL nusxalandi"
        },
        "boost": {
            "title": "Ko‘proq tanga oling",
            "button": "Aylantirish",
            "button_invite": "Qolgan takliflar",
            "task_list_title": "Vazifalar ro‘yxati",
            "promocode": "Promokod",
            "promocode_button": "Qo‘llash",
            "promocode_success": "Promokod muvaffaqiyatli qo‘llandi! Olingan ",
            "promocode_error": "Promokodni qo‘llashda xatolik",
            "spin_success": "Siz yutdingiz:",
            "spin_error": "Xato"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Birinci mavsum tugagandan so‘ng token ro‘yxatga olinadi.<br><br>Hozirda siz ba'zi ballaringizni xayriya uchun jo‘natasiz.",
            "placeholder": "Miqdor",
            "button": "Yuborish",
            "success": "Xayriya yuborildi",
            "error": "Xayriya yuborishda xatolik",
            "error_insufficient_funds": "Xayriya uchun yetarli tangalar mavjud emas"
        }
    },
    vi: {
        "menu": {
            "home": "Trang chủ",
            "actives": "Hoạt động",
            "friends": "Bạn bè",
            "boost": "Tăng cường",
            "airdrop": "Airdrop"
        },
        "levels": {
            "1": {
                "name": "Người mới bắt đầu",
                "score": "0 - 5K"
            },
            "2": {
                "name": "Bảo thủ",
                "score": "5K - 25K"
            },
            "3": {
                "name": "Tương đối",
                "score": "25K - 100K"
            },
            "4": {
                "name": "Hợp lý",
                "score": "100K - 1M"
            },
            "5": {
                "name": "Đầu cơ",
                "score": "1M - 10M"
            },
            "6": {
                "name": "Mạo hiểm",
                "score": "10M - 50M"
            },
            "7": {
                "name": "Doanh nghiệp",
                "score": "Từ 50M trở lên"
            }
        },
        "home": {
            "level": "Cấp độ",
            "investments_count": "Hoạt động",
            "investments_const": "Số tiền đầu tư",
            "profit": "Lợi nhuận",
            "pnl": "PNL",
            "rounds": "Vòng",
            "directions": "Hướng dẫn",
            "projects": "Dự án",
            "specials": "Đặc biệt",
            "ranking": "Xếp hạng của bạn",
            "change_lang": "Chọn ngôn ngữ",
            "offline_income_title": "Thu nhập của bạn",
            "offline_income_cta": "Kiểm tra ứng dụng thường xuyên hơn!",
            "offline_income_close": "OK"
        },
        "actives": {
            "title": "Đầu tư<br>và kiếm lợi nhuận",
            "rounds": "Vòng",
            "directions": "Hướng dẫn",
            "projects": "Dự án",
            "specials": "Đặc biệt",
            "level": "Cấp độ",
            "income": "Thu nhập",
            "price": "Giá",
            "upgrade": "Nâng cấp",
            "header_actives": "Hoạt động",
            "header_income": "Thu nhập",
            "toast_success": "Hoạt động đã được nâng cấp thành công",
            "toast_fail": "Nâng cấp hoạt động không thành công",
            "modal_invested": "Đã đầu tư",
            "modal_profit": "Lợi nhuận",
            "daily_card": "Thẻ hàng ngày",
            "daily_card_title": "Rèn luyện trí óc và kiếm",
            "daily_answer_correct": "Đúng rồi! Bạn đã kiếm được:",
            "daily_answer_wrong": "Sai rồi! Đáp án đúng là:"
        },
        "friends": {
            "title": "Mời bạn bè và<br>nhận phần thưởng!",
            "invite_button": "Mời bạn",
            "one_friend_title": "Mời một người bạn",
            "one_friend_bonus": "cho mỗi người bạn",
            "three_friend_title": "Mời 3 người bạn",
            "five_friend_title": "Mời 5 người bạn",
            "invite_spin": "Quay",
            "invite_wheel": "vòng quay may mắn",
            "invite_3": "mỗi 24 giờ",
            "invite_5": "mỗi 12 giờ",
            "friends_list_title": "Danh sách bạn bè của bạn",
            "url_copied": "URL đã được sao chép"
        },
        "boost": {
            "title": "Kiếm thêm đồng",
            "button": "Quay",
            "button_invite": "Số lượt mời còn lại",
            "task_list_title": "Danh sách nhiệm vụ",
            "promocode": "Mã khuyến mãi",
            "promocode_button": "Áp dụng",
            "promocode_success": "Mã khuyến mãi đã được áp dụng! Nhận được ",
            "promocode_error": "Áp dụng mã khuyến mãi thất bại",
            "spin_success": "Bạn đã thắng:",
            "spin_error": "Lỗi"
        },
        "airdrop": {
            "title": "Airdrop",
            "text": "Sau khi mùa giải đầu tiên kết thúc, token sẽ được niêm yết.<br><br>Hiện tại bạn có thể gửi một số điểm của bạn cho từ thiện.",
            "placeholder": "Số lượng",
            "button": "Gửi",
            "success": "Đã gửi quyên góp",
            "error": "Quyên góp thất bại",
            "error_insufficient_funds": "Không đủ coin để quyên góp"
        }
    }
}