<?php

/* form_div_layout.html.twig */
class __TwigTemplate_397d59b328061e6d6fe2851607cae9ee extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'form_widget' => array($this, 'block_form_widget'),
            'collection_widget' => array($this, 'block_collection_widget'),
            'textarea_widget' => array($this, 'block_textarea_widget'),
            'widget_choice_options' => array($this, 'block_widget_choice_options'),
            'choice_widget' => array($this, 'block_choice_widget'),
            'checkbox_widget' => array($this, 'block_checkbox_widget'),
            'radio_widget' => array($this, 'block_radio_widget'),
            'datetime_widget' => array($this, 'block_datetime_widget'),
            'date_widget' => array($this, 'block_date_widget'),
            'time_widget' => array($this, 'block_time_widget'),
            'number_widget' => array($this, 'block_number_widget'),
            'integer_widget' => array($this, 'block_integer_widget'),
            'money_widget' => array($this, 'block_money_widget'),
            'url_widget' => array($this, 'block_url_widget'),
            'search_widget' => array($this, 'block_search_widget'),
            'percent_widget' => array($this, 'block_percent_widget'),
            'field_widget' => array($this, 'block_field_widget'),
            'password_widget' => array($this, 'block_password_widget'),
            'hidden_widget' => array($this, 'block_hidden_widget'),
            'email_widget' => array($this, 'block_email_widget'),
            'generic_label' => array($this, 'block_generic_label'),
            'field_label' => array($this, 'block_field_label'),
            'form_label' => array($this, 'block_form_label'),
            'repeated_row' => array($this, 'block_repeated_row'),
            'field_row' => array($this, 'block_field_row'),
            'hidden_row' => array($this, 'block_hidden_row'),
            'field_enctype' => array($this, 'block_field_enctype'),
            'field_errors' => array($this, 'block_field_errors'),
            'field_rest' => array($this, 'block_field_rest'),
            'field_rows' => array($this, 'block_field_rows'),
            'widget_attributes' => array($this, 'block_widget_attributes'),
            'widget_container_attributes' => array($this, 'block_widget_container_attributes'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        echo "
";
        // line 3
        $this->displayBlock('form_widget', $context, $blocks);
        // line 11
        echo "
";
        // line 12
        $this->displayBlock('collection_widget', $context, $blocks);
        // line 20
        echo "
";
        // line 21
        $this->displayBlock('textarea_widget', $context, $blocks);
        // line 26
        echo "
";
        // line 27
        $this->displayBlock('widget_choice_options', $context, $blocks);
        // line 42
        echo "
";
        // line 43
        $this->displayBlock('choice_widget', $context, $blocks);
        // line 70
        echo "
";
        // line 71
        $this->displayBlock('checkbox_widget', $context, $blocks);
        // line 76
        echo "
";
        // line 77
        $this->displayBlock('radio_widget', $context, $blocks);
        // line 82
        echo "
";
        // line 83
        $this->displayBlock('datetime_widget', $context, $blocks);
        // line 97
        echo "
";
        // line 98
        $this->displayBlock('date_widget', $context, $blocks);
        // line 113
        echo "
";
        // line 114
        $this->displayBlock('time_widget', $context, $blocks);
        // line 125
        echo "
";
        // line 126
        $this->displayBlock('number_widget', $context, $blocks);
        // line 133
        echo "
";
        // line 134
        $this->displayBlock('integer_widget', $context, $blocks);
        // line 140
        echo "
";
        // line 141
        $this->displayBlock('money_widget', $context, $blocks);
        // line 146
        echo "
";
        // line 147
        $this->displayBlock('url_widget', $context, $blocks);
        // line 153
        echo "
";
        // line 154
        $this->displayBlock('search_widget', $context, $blocks);
        // line 160
        echo "
";
        // line 161
        $this->displayBlock('percent_widget', $context, $blocks);
        // line 167
        echo "
";
        // line 168
        $this->displayBlock('field_widget', $context, $blocks);
        // line 174
        echo "
";
        // line 175
        $this->displayBlock('password_widget', $context, $blocks);
        // line 181
        echo "
";
        // line 182
        $this->displayBlock('hidden_widget', $context, $blocks);
        // line 186
        echo "
";
        // line 187
        $this->displayBlock('email_widget', $context, $blocks);
        // line 193
        echo "
";
        // line 195
        echo "
";
        // line 196
        $this->displayBlock('generic_label', $context, $blocks);
        // line 204
        echo "
";
        // line 205
        $this->displayBlock('field_label', $context, $blocks);
        // line 211
        echo "
";
        // line 212
        $this->displayBlock('form_label', $context, $blocks);
        // line 217
        echo "
";
        // line 219
        echo "
";
        // line 220
        $this->displayBlock('repeated_row', $context, $blocks);
        // line 225
        echo "
";
        // line 226
        $this->displayBlock('field_row', $context, $blocks);
        // line 235
        echo "
";
        // line 236
        $this->displayBlock('hidden_row', $context, $blocks);
        // line 239
        echo "
";
        // line 241
        echo "
";
        // line 242
        $this->displayBlock('field_enctype', $context, $blocks);
        // line 247
        echo "
";
        // line 248
        $this->displayBlock('field_errors', $context, $blocks);
        // line 259
        echo "
";
        // line 260
        $this->displayBlock('field_rest', $context, $blocks);
        // line 269
        echo "
";
        // line 271
        echo "
";
        // line 272
        $this->displayBlock('field_rows', $context, $blocks);
        // line 280
        echo "
";
        // line 281
        $this->displayBlock('widget_attributes', $context, $blocks);
        // line 287
        echo "
";
        // line 288
        $this->displayBlock('widget_container_attributes', $context, $blocks);
    }

    // line 3
    public function block_form_widget($context, array $blocks = array())
    {
        // line 4
        ob_start();
        // line 5
        echo "    <div ";
        $this->displayBlock("widget_container_attributes", $context, $blocks);
        echo ">
        ";
        // line 6
        $this->displayBlock("field_rows", $context, $blocks);
        echo "
        ";
        // line 7
        echo $this->env->getExtension('form')->renderRest($this->getContext($context, "form"));
        echo "
    </div>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 12
    public function block_collection_widget($context, array $blocks = array())
    {
        // line 13
        ob_start();
        // line 14
        echo "    ";
        if (array_key_exists("prototype", $context)) {
            // line 15
            echo "        ";
            $context["attr"] = twig_array_merge($this->getContext($context, "attr"), array("data-prototype" => $this->env->getExtension('form')->renderRow($this->getContext($context, "prototype"))));
            // line 16
            echo "    ";
        }
        // line 17
        echo "    ";
        $this->displayBlock("form_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 21
    public function block_textarea_widget($context, array $blocks = array())
    {
        // line 22
        ob_start();
        // line 23
        echo "    <textarea ";
        $this->displayBlock("widget_attributes", $context, $blocks);
        echo ">";
        echo twig_escape_filter($this->env, $this->getContext($context, "value"), "html", null, true);
        echo "</textarea>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 27
    public function block_widget_choice_options($context, array $blocks = array())
    {
        // line 28
        ob_start();
        // line 29
        echo "    ";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "options"));
        foreach ($context['_seq'] as $context["choice"] => $context["label"]) {
            // line 30
            echo "        ";
            if ($this->env->getExtension('form')->isChoiceGroup($this->getContext($context, "label"))) {
                // line 31
                echo "            <optgroup label=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getContext($context, "choice")), "html", null, true);
                echo "\">
                ";
                // line 32
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getContext($context, "label"));
                foreach ($context['_seq'] as $context["nestedChoice"] => $context["nestedLabel"]) {
                    // line 33
                    echo "                    <option value=\"";
                    echo twig_escape_filter($this->env, $this->getContext($context, "nestedChoice"), "html", null, true);
                    echo "\"";
                    if ($this->env->getExtension('form')->isChoiceSelected($this->getContext($context, "form"), $this->getContext($context, "nestedChoice"))) {
                        echo " selected=\"selected\"";
                    }
                    echo ">";
                    echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getContext($context, "nestedLabel")), "html", null, true);
                    echo "</option>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['nestedChoice'], $context['nestedLabel'], $context['_parent'], $context['loop']);
                $context = array_merge($_parent, array_intersect_key($context, $_parent));
                // line 35
                echo "            </optgroup>
        ";
            } else {
                // line 37
                echo "            <option value=\"";
                echo twig_escape_filter($this->env, $this->getContext($context, "choice"), "html", null, true);
                echo "\"";
                if ($this->env->getExtension('form')->isChoiceSelected($this->getContext($context, "form"), $this->getContext($context, "choice"))) {
                    echo " selected=\"selected\"";
                }
                echo ">";
                echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getContext($context, "label")), "html", null, true);
                echo "</option>
        ";
            }
            // line 39
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['choice'], $context['label'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 43
    public function block_choice_widget($context, array $blocks = array())
    {
        // line 44
        ob_start();
        // line 45
        echo "    ";
        if ($this->getContext($context, "expanded")) {
            // line 46
            echo "        <div ";
            $this->displayBlock("widget_container_attributes", $context, $blocks);
            echo ">
        ";
            // line 47
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getContext($context, "form"));
            foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
                // line 48
                echo "            ";
                echo $this->env->getExtension('form')->renderWidget($this->getContext($context, "child"));
                echo "
            ";
                // line 49
                echo $this->env->getExtension('form')->renderLabel($this->getContext($context, "child"));
                echo "
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 51
            echo "        </div>
    ";
        } else {
            // line 53
            echo "    <select ";
            $this->displayBlock("widget_attributes", $context, $blocks);
            if ($this->getContext($context, "multiple")) {
                echo " multiple=\"multiple\"";
            }
            echo ">
        ";
            // line 54
            if ((!(null === $this->getContext($context, "empty_value")))) {
                // line 55
                echo "            <option value=\"\">";
                echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getContext($context, "empty_value")), "html", null, true);
                echo "</option>
        ";
            }
            // line 57
            echo "        ";
            if ((twig_length_filter($this->env, $this->getContext($context, "preferred_choices")) > 0)) {
                // line 58
                echo "            ";
                $context["options"] = $this->getContext($context, "preferred_choices");
                // line 59
                echo "            ";
                $this->displayBlock("widget_choice_options", $context, $blocks);
                echo "
            ";
                // line 60
                if (((twig_length_filter($this->env, $this->getContext($context, "choices")) > 0) && (!(null === $this->getContext($context, "separator"))))) {
                    // line 61
                    echo "                <option disabled=\"disabled\">";
                    echo twig_escape_filter($this->env, $this->getContext($context, "separator"), "html", null, true);
                    echo "</option>
            ";
                }
                // line 63
                echo "        ";
            }
            // line 64
            echo "        ";
            $context["options"] = $this->getContext($context, "choices");
            // line 65
            echo "        ";
            $this->displayBlock("widget_choice_options", $context, $blocks);
            echo "
    </select>
    ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 71
    public function block_checkbox_widget($context, array $blocks = array())
    {
        // line 72
        ob_start();
        // line 73
        echo "    <input type=\"checkbox\" ";
        $this->displayBlock("widget_attributes", $context, $blocks);
        if (array_key_exists("value", $context)) {
            echo " value=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "value"), "html", null, true);
            echo "\"";
        }
        if ($this->getContext($context, "checked")) {
            echo " checked=\"checked\"";
        }
        echo " />
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 77
    public function block_radio_widget($context, array $blocks = array())
    {
        // line 78
        ob_start();
        // line 79
        echo "    <input type=\"radio\" ";
        $this->displayBlock("widget_attributes", $context, $blocks);
        if (array_key_exists("value", $context)) {
            echo " value=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "value"), "html", null, true);
            echo "\"";
        }
        if ($this->getContext($context, "checked")) {
            echo " checked=\"checked\"";
        }
        echo " />
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 83
    public function block_datetime_widget($context, array $blocks = array())
    {
        // line 84
        ob_start();
        // line 85
        echo "    ";
        if (($this->getContext($context, "widget") == "single_text")) {
            // line 86
            echo "        ";
            $this->displayBlock("field_widget", $context, $blocks);
            echo "
    ";
        } else {
            // line 88
            echo "        <div ";
            $this->displayBlock("widget_container_attributes", $context, $blocks);
            echo ">
            ";
            // line 89
            echo $this->env->getExtension('form')->renderErrors($this->getAttribute($this->getContext($context, "form"), "date"));
            echo "
            ";
            // line 90
            echo $this->env->getExtension('form')->renderErrors($this->getAttribute($this->getContext($context, "form"), "time"));
            echo "
            ";
            // line 91
            echo $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "date"));
            echo "
            ";
            // line 92
            echo $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "time"));
            echo "
        </div>
    ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 98
    public function block_date_widget($context, array $blocks = array())
    {
        // line 99
        ob_start();
        // line 100
        echo "    ";
        if (($this->getContext($context, "widget") == "single_text")) {
            // line 101
            echo "        ";
            $this->displayBlock("field_widget", $context, $blocks);
            echo "
    ";
        } else {
            // line 103
            echo "        <div ";
            $this->displayBlock("widget_container_attributes", $context, $blocks);
            echo ">
            ";
            // line 104
            echo strtr($this->getContext($context, "date_pattern"), array("{{ year }}" => $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "year")), "{{ month }}" => $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "month")), "{{ day }}" => $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "day"))));
            // line 108
            echo "
        </div>
    ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 114
    public function block_time_widget($context, array $blocks = array())
    {
        // line 115
        ob_start();
        // line 116
        echo "    ";
        if (($this->getContext($context, "widget") == "single_text")) {
            // line 117
            echo "        ";
            $this->displayBlock("field_widget", $context, $blocks);
            echo "
    ";
        } else {
            // line 119
            echo "        <div ";
            $this->displayBlock("widget_container_attributes", $context, $blocks);
            echo ">
            ";
            // line 120
            echo $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "hour"), array("attr" => array("size" => "1")));
            echo ":";
            echo $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "minute"), array("attr" => array("size" => "1")));
            if ($this->getContext($context, "with_seconds")) {
                echo ":";
                echo $this->env->getExtension('form')->renderWidget($this->getAttribute($this->getContext($context, "form"), "second"), array("attr" => array("size" => "1")));
            }
            // line 121
            echo "        </div>
    ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 126
    public function block_number_widget($context, array $blocks = array())
    {
        // line 127
        ob_start();
        // line 128
        echo "    ";
        // line 129
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "text")) : ("text"));
        // line 130
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 134
    public function block_integer_widget($context, array $blocks = array())
    {
        // line 135
        ob_start();
        // line 136
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "number")) : ("number"));
        // line 137
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 141
    public function block_money_widget($context, array $blocks = array())
    {
        // line 142
        ob_start();
        // line 143
        echo "    ";
        echo strtr($this->getContext($context, "money_pattern"), array("{{ widget }}" => $this->renderBlock("field_widget", $context, $blocks)));
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 147
    public function block_url_widget($context, array $blocks = array())
    {
        // line 148
        ob_start();
        // line 149
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "url")) : ("url"));
        // line 150
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 154
    public function block_search_widget($context, array $blocks = array())
    {
        // line 155
        ob_start();
        // line 156
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "search")) : ("search"));
        // line 157
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 161
    public function block_percent_widget($context, array $blocks = array())
    {
        // line 162
        ob_start();
        // line 163
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "text")) : ("text"));
        // line 164
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo " %
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 168
    public function block_field_widget($context, array $blocks = array())
    {
        // line 169
        ob_start();
        // line 170
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "text")) : ("text"));
        // line 171
        echo "    <input type=\"";
        echo twig_escape_filter($this->env, $this->getContext($context, "type"), "html", null, true);
        echo "\" ";
        $this->displayBlock("widget_attributes", $context, $blocks);
        echo " ";
        if ((!twig_test_empty($this->getContext($context, "value")))) {
            echo "value=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "value"), "html", null, true);
            echo "\" ";
        }
        echo "/>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 175
    public function block_password_widget($context, array $blocks = array())
    {
        // line 176
        ob_start();
        // line 177
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "password")) : ("password"));
        // line 178
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 182
    public function block_hidden_widget($context, array $blocks = array())
    {
        // line 183
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "hidden")) : ("hidden"));
        // line 184
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
    }

    // line 187
    public function block_email_widget($context, array $blocks = array())
    {
        // line 188
        ob_start();
        // line 189
        echo "    ";
        $context["type"] = ((array_key_exists("type", $context)) ? (_twig_default_filter($this->getContext($context, "type"), "email")) : ("email"));
        // line 190
        echo "    ";
        $this->displayBlock("field_widget", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 196
    public function block_generic_label($context, array $blocks = array())
    {
        // line 197
        ob_start();
        // line 198
        echo "    ";
        if ($this->getContext($context, "required")) {
            // line 199
            echo "        ";
            $context["attr"] = twig_array_merge($this->getContext($context, "attr"), array("class" => ((($this->getAttribute($this->getContext($context, "attr", true), "class", array(), "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getContext($context, "attr", true), "class"), "")) : ("")) . " required")));
            // line 200
            echo "    ";
        }
        // line 201
        echo "    <label";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "attr"));
        foreach ($context['_seq'] as $context["attrname"] => $context["attrvalue"]) {
            echo " ";
            echo twig_escape_filter($this->env, $this->getContext($context, "attrname"), "html", null, true);
            echo "=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "attrvalue"), "html", null, true);
            echo "\"";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['attrname'], $context['attrvalue'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo ">";
        echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getContext($context, "label")), "html", null, true);
        echo "</label>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 205
    public function block_field_label($context, array $blocks = array())
    {
        // line 206
        ob_start();
        // line 207
        echo "    ";
        $context["attr"] = twig_array_merge($this->getContext($context, "attr"), array("for" => $this->getContext($context, "id")));
        // line 208
        echo "    ";
        $this->displayBlock("generic_label", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 212
    public function block_form_label($context, array $blocks = array())
    {
        // line 213
        ob_start();
        // line 214
        echo "    ";
        $this->displayBlock("generic_label", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 220
    public function block_repeated_row($context, array $blocks = array())
    {
        // line 221
        ob_start();
        // line 222
        echo "    ";
        $this->displayBlock("field_rows", $context, $blocks);
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 226
    public function block_field_row($context, array $blocks = array())
    {
        // line 227
        ob_start();
        // line 228
        echo "    <div>
        ";
        // line 229
        echo $this->env->getExtension('form')->renderLabel($this->getContext($context, "form"), ((array_key_exists("label", $context)) ? (_twig_default_filter($this->getContext($context, "label"), null)) : (null)));
        echo "
        ";
        // line 230
        echo $this->env->getExtension('form')->renderErrors($this->getContext($context, "form"));
        echo "
        ";
        // line 231
        echo $this->env->getExtension('form')->renderWidget($this->getContext($context, "form"));
        echo "
    </div>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 236
    public function block_hidden_row($context, array $blocks = array())
    {
        // line 237
        echo "    ";
        echo $this->env->getExtension('form')->renderWidget($this->getContext($context, "form"));
        echo "
";
    }

    // line 242
    public function block_field_enctype($context, array $blocks = array())
    {
        // line 243
        ob_start();
        // line 244
        echo "    ";
        if ($this->getContext($context, "multipart")) {
            echo "enctype=\"multipart/form-data\"";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 248
    public function block_field_errors($context, array $blocks = array())
    {
        // line 249
        ob_start();
        // line 250
        echo "    ";
        if ((twig_length_filter($this->env, $this->getContext($context, "errors")) > 0)) {
            // line 251
            echo "    <ul>
        ";
            // line 252
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getContext($context, "errors"));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 253
                echo "            <li>";
                echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans($this->getAttribute($this->getContext($context, "error"), "messageTemplate"), $this->getAttribute($this->getContext($context, "error"), "messageParameters"), "validators"), "html", null, true);
                echo "</li>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 255
            echo "    </ul>
    ";
        }
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 260
    public function block_field_rest($context, array $blocks = array())
    {
        // line 261
        ob_start();
        // line 262
        echo "    ";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "form"));
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 263
            echo "        ";
            if ((!$this->getAttribute($this->getContext($context, "child"), "rendered"))) {
                // line 264
                echo "            ";
                echo $this->env->getExtension('form')->renderRow($this->getContext($context, "child"));
                echo "
        ";
            }
            // line 266
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 272
    public function block_field_rows($context, array $blocks = array())
    {
        // line 273
        ob_start();
        // line 274
        echo "    ";
        echo $this->env->getExtension('form')->renderErrors($this->getContext($context, "form"));
        echo "
    ";
        // line 275
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "form"));
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 276
            echo "        ";
            echo $this->env->getExtension('form')->renderRow($this->getContext($context, "child"));
            echo "
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 281
    public function block_widget_attributes($context, array $blocks = array())
    {
        // line 282
        ob_start();
        // line 283
        echo "    id=\"";
        echo twig_escape_filter($this->env, $this->getContext($context, "id"), "html", null, true);
        echo "\" name=\"";
        echo twig_escape_filter($this->env, $this->getContext($context, "full_name"), "html", null, true);
        echo "\"";
        if ($this->getContext($context, "read_only")) {
            echo " disabled=\"disabled\"";
        }
        if ($this->getContext($context, "required")) {
            echo " required=\"required\"";
        }
        if ($this->getContext($context, "max_length")) {
            echo " maxlength=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "max_length"), "html", null, true);
            echo "\"";
        }
        if ($this->getContext($context, "pattern")) {
            echo " pattern=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "pattern"), "html", null, true);
            echo "\"";
        }
        // line 284
        echo "    ";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "attr"));
        foreach ($context['_seq'] as $context["attrname"] => $context["attrvalue"]) {
            echo twig_escape_filter($this->env, $this->getContext($context, "attrname"), "html", null, true);
            echo "=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "attrvalue"), "html", null, true);
            echo "\" ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['attrname'], $context['attrvalue'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 288
    public function block_widget_container_attributes($context, array $blocks = array())
    {
        // line 289
        ob_start();
        // line 290
        echo "    id=\"";
        echo twig_escape_filter($this->env, $this->getContext($context, "id"), "html", null, true);
        echo "\"
    ";
        // line 291
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getContext($context, "attr"));
        foreach ($context['_seq'] as $context["attrname"] => $context["attrvalue"]) {
            echo twig_escape_filter($this->env, $this->getContext($context, "attrname"), "html", null, true);
            echo "=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "attrvalue"), "html", null, true);
            echo "\" ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['attrname'], $context['attrvalue'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    public function getTemplateName()
    {
        return "form_div_layout.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  1000 => 291,  995 => 290,  993 => 289,  990 => 288,  974 => 284,  952 => 283,  950 => 282,  947 => 281,  935 => 276,  931 => 275,  926 => 274,  924 => 273,  921 => 272,  912 => 266,  906 => 264,  903 => 263,  898 => 262,  896 => 261,  893 => 260,  886 => 255,  877 => 253,  873 => 252,  870 => 251,  867 => 250,  865 => 249,  862 => 248,  854 => 244,  852 => 243,  849 => 242,  842 => 237,  839 => 236,  831 => 231,  827 => 230,  823 => 229,  820 => 228,  818 => 227,  815 => 226,  807 => 222,  805 => 221,  802 => 220,  794 => 214,  792 => 213,  789 => 212,  781 => 208,  778 => 207,  776 => 206,  773 => 205,  752 => 201,  749 => 200,  746 => 199,  743 => 198,  741 => 197,  738 => 196,  730 => 190,  727 => 189,  725 => 188,  722 => 187,  715 => 184,  712 => 183,  709 => 182,  701 => 178,  698 => 177,  696 => 176,  693 => 175,  677 => 171,  674 => 170,  672 => 169,  669 => 168,  661 => 164,  658 => 163,  656 => 162,  653 => 161,  645 => 157,  642 => 156,  640 => 155,  637 => 154,  629 => 150,  626 => 149,  624 => 148,  621 => 147,  613 => 143,  611 => 142,  608 => 141,  600 => 137,  597 => 136,  595 => 135,  592 => 134,  584 => 130,  581 => 129,  579 => 128,  577 => 127,  574 => 126,  567 => 121,  559 => 120,  554 => 119,  548 => 117,  545 => 116,  543 => 115,  540 => 114,  532 => 108,  530 => 104,  525 => 103,  519 => 101,  516 => 100,  514 => 99,  511 => 98,  502 => 92,  498 => 91,  494 => 90,  490 => 89,  485 => 88,  479 => 86,  476 => 85,  474 => 84,  471 => 83,  455 => 79,  453 => 78,  450 => 77,  434 => 73,  432 => 72,  429 => 71,  419 => 65,  416 => 64,  413 => 63,  407 => 61,  405 => 60,  400 => 59,  397 => 58,  394 => 57,  388 => 55,  386 => 54,  378 => 53,  374 => 51,  366 => 49,  361 => 48,  357 => 47,  352 => 46,  349 => 45,  347 => 44,  344 => 43,  335 => 39,  323 => 37,  319 => 35,  304 => 33,  300 => 32,  295 => 31,  292 => 30,  287 => 29,  285 => 28,  282 => 27,  272 => 23,  270 => 22,  267 => 21,  259 => 17,  256 => 16,  253 => 15,  250 => 14,  248 => 13,  245 => 12,  237 => 7,  233 => 6,  228 => 5,  226 => 4,  223 => 3,  219 => 288,  216 => 287,  214 => 281,  211 => 280,  209 => 272,  206 => 271,  203 => 269,  201 => 260,  198 => 259,  196 => 248,  193 => 247,  191 => 242,  188 => 241,  185 => 239,  183 => 236,  180 => 235,  178 => 226,  175 => 225,  173 => 220,  170 => 219,  167 => 217,  165 => 212,  162 => 211,  160 => 205,  157 => 204,  155 => 196,  152 => 195,  149 => 193,  147 => 187,  144 => 186,  142 => 182,  139 => 181,  137 => 175,  134 => 174,  132 => 168,  129 => 167,  127 => 161,  124 => 160,  122 => 154,  119 => 153,  117 => 147,  114 => 146,  112 => 141,  109 => 140,  107 => 134,  104 => 133,  102 => 126,  99 => 125,  97 => 114,  94 => 113,  92 => 98,  89 => 97,  87 => 83,  84 => 82,  82 => 77,  79 => 76,  77 => 71,  74 => 70,  72 => 43,  69 => 42,  64 => 26,  62 => 21,  59 => 20,  54 => 11,  56 => 14,  50 => 13,  46 => 11,  44 => 10,  35 => 7,  24 => 3,  20 => 2,  17 => 1,  67 => 27,  49 => 2,  47 => 15,  41 => 9,  29 => 5,  25 => 5,  19 => 1,  81 => 24,  75 => 21,  71 => 20,  65 => 17,  61 => 6,  57 => 12,  52 => 3,  48 => 12,  42 => 8,  39 => 7,  36 => 6,  33 => 7,  27 => 4,);
    }
}
