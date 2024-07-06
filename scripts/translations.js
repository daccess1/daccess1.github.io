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
                score: "50M - 100M"
            },
            8: {
                name: "Institutional",
                score: "from 100M"
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
            three_friend_title: "Invite 3 friends",
            five_friend_title: "Invite 5 friends",
            invite_spin: "Spin",
            invite_wheel: "wheel of fortune",
            invite_3: "every 24 hours",
            invite_5: "every 12 hours",
            friends_list_title: "List of your friends",
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
                score: "50M - 100M"
            },
            8: {
                name: "Институциональный",
                score: "от 100M"
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
            three_friend_title: "Пригласи 3 друзей",
            five_friend_title: "Пригласи 5 друзей",
            invite_spin: "Крути",
            invite_wheel: "колесо фортуны",
            invite_3: "каждые 24 часа",
            invite_5: "каждые 12 чаов",
            friends_list_title: "Твои друзья",
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