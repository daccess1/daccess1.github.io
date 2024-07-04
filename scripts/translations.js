var _available_translations = ['en', 'ru'];
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
                score: "from 0"
            },
            2: {
                name: "Conservative",
                score: "from 5K"
            },
            3: {
                name: "Moderate",
                score: "from 25K"
            },
            4: {
                name: "Rational",
                score: "from 100K"
            },
            5: {
                name: "Speculative",
                score: "from 1M"
            },
            6: {
                name: "Aggressive",
                score: "from 10M"
            },
            7: {
                name: "Enterprise",
                score: "from 50M"
            },
            8: {
                name: "Institutional",
                score: "from 100M"
            }
        },
        home: {
            level: "Level",
            investments_count: "Investments count",
            investments_const: "Investments amount",
            profit: "Profit",
            pnl: "PNL",
            rounds: "Rounds",
            directions: "Directions",
            projects: "Projects",
            specials: "Special",
            ranking: "Your rank",
            change_lang: "Select language"
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
            modal_profit: "Profit"
        },
        friends: {
            title: "Invite friends and you will<br>get bonuses!",
            invite_button: "Invite friend",
            one_friend_title: "Invite friend",
            one_friend_bonus: "for 1 friend",
            five_friend_title: "Invite friends",
            five_friend_bonus: "for 5 friends",
            friends_list_title: "List of your friends",
        },
        boost: {
            title: "Earn more coins",
            button: "Spin",
            button_invite: "Invitations remaining",
            task_list_title: "Task list",
            task_youtube: "Join our<br>YouTube channel",
            task_tg: "Get exclusive<br>information",
            task_twitter: "Follow our<br>X account",
            promocode: "Promocode",
            promocode_button: "Apply",
            promocode_success: "Promocode applied! Received ",
            promocode_error: "Promocode application failed",
            spin_success: "You won:",
            spin_error: ""
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
                score: "от 0"
            },
            2: {
                name: "Консервативный",
                score: "от 5K"
            },
            3: {
                name: "Умеренный",
                score: "от 25K"
            },
            4: {
                name: "Рациональный",
                score: "от 100K"
            },
            5: {
                name: "Спекулятивный",
                score: "от 1M"
            },
            6: {
                name: "Агрессивный",
                score: "от 10M"
            },
            7: {
                name: "Корпоративный",
                score: "от 50M"
            },
            8: {
                name: "Институциональный",
                score: "от 100M"
            }
        },
        home: {
            level: "Уровень",
            investments_count: "Число инвестиций",
            investments_const: "Объем инвестиций",
            profit: "Профит",
            pnl: "PNL",
            rounds: "Раунды",
            directions: "Сферы",
            projects: "Проекты",
            specials: "Особые",
            ranking: "Ваше место",
            change_lang: "Выберите язык"
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
            modal_profit: "Доход"
        },
        friends: {
            title: "Приглашай друзей и<br>получай бонусы",
            invite_button: "Пригласить друга",
            one_friend_title: "Пригласи друга",
            one_friend_bonus: "за 1 друга",
            five_friend_title: "Пригласи друзей",
            five_friend_bonus: "за 5 друзей",
            friends_list_title: "Твои друзья",
        },
        boost: {
            title: "Заработай больше<br>монет",
            button: "Крутить",
            button_invite: "Осталось приглашений",
            task_list_title: "Список заданий",
            task_youtube: "Присоединяйтесь<br>к нашему каналу",
            task_tg: "Получите эксклюзивную<br>информацию",
            task_twitter: "Следи за нашим<br>аккаунтом в X",
            promocode: "Промокод",
            promocode_button: "Применить",
            promocode_success: "Промокод применен! Получено",
            promocode_error: "Не удалось применить промокод",
            spin_success: "Вы выиграли:",
            spin_error: ""
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
    }
}