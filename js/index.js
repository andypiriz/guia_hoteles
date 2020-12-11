$(function () {
            $("[data-toggle='tooltip']").tooltip();
            $("[data-toggle='popover']").popover();
            $('.carousel').carousel({
                interval: 3000
            });

            $('#contacto').on('show.bs.modal', function (e) {
                console.log('El modal de contacto se está mostrando');

                $('.contactarBTN').removeClass('btn-outline-success');
                $('.contactarBTN').addClass('btn-primary');
                $('.contactarBTN').prop('disabled', true);

            });
            $('#contacto').on('shown.bs.modal', function (e) {
                console.log('El modal de contacto se mostró');
            });
            $('#contacto').on('hide.bs.modal', function (e) {
                    console.log('El modal de contacto se oculta');
                }),
                $('#contacto').on('hidden.bs.modal', function (e) {
                    console.log('El modal de contacto se ocultó');
                    $('.contactarBTN').prop('disabled', false);
                });
        });