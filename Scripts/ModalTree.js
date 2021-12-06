let TreeJSON = { 
    'core' : {
        'data' : [
        {
            'text' : 'TOO REALITY',
            'id':'node_first',
            'icon' : './images/modal-window1-img1.svg',
            'state' : {
                'opened' : true
            },
            'children' : [
                { 
                    'text' : 'Юридический департамет',
                    'state' : {
                        'opened' : true
                    },
                    'children':[
                        {'text' : 'Илиев Нурзат Каримович'}
                    ]
                }
            ]
        }
    ]
} 

};

$('.node_Tree').jstree(TreeJSON);