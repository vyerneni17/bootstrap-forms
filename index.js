$(document).ready(function() {
    $('#contact_form')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                full_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please enter your Full Name'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter your Email Address'
                        },
                        emailAddress: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'Please enter a valid Email Address'
                        },
                    }
                },
                nonprofit_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please enter your NonProfit Name'
                        }
                    }
                },
                website: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter a Website URL'
                        },
                        uri: {
                            message: 'The URL is not valid'
                        }
                    }
                },
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please enter your First Name'
                        }
                    }
                },
                last_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please enter your Last Name'
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter a Phone Number'
                        },
                        phone: {
                            country: 'US',
                            message: 'Please enter a valid Phone Number with area code'
                        }
                    }
                },
                twitter_name: {
                    validators: {
                        notEmpty: {
                            message: 'Please enter your Twitter User Name'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            var button = $('button span');
            var success = $('#success_message');
            var form = $('#contact_form');

            button.text(' Sending...');
            setTimeout(function(){
                button.text(' Hang tight, We\'re almost there!');
            },5000);

            setTimeout(function(){
                form.data('bootstrapValidator').resetForm();
                form.get(0).reset();
                button.text(' SEND');
                success.slideDown({ opacity: 'show' }, 'slow');
                setTimeout(function(){
                    success.slideUp({ opacity:'hide'}, 'slow');
                }, 5000);
            },10000);

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
        });
});



