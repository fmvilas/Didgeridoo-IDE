<?php

/* SecurityBundle:Collector:security.html.twig */
class __TwigTemplate_28bfc44c45f0997d02f054d76dca75f9 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("WebProfilerBundle:Profiler:layout.html.twig");

        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "WebProfilerBundle:Profiler:layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        $context["icon"] = ('' === $tmp = "        <img width=\"24\" height=\"28\" alt=\"Security\" style=\"border-width: 0; vertical-align: middle; margin-right: 5px;\" src=\"data:image/png;base64,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\" />
    ") ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 7
        echo "    ";
        ob_start();
        // line 8
        echo "        ";
        if ($this->getAttribute($this->getContext($context, "collector"), "user")) {
            // line 9
            echo "            ";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "collector"), "user"), "html", null, true);
            echo " ";
            if ((!$this->getAttribute($this->getContext($context, "collector"), "authenticated"))) {
                echo "<em>(not auth.)</em>";
            }
            // line 10
            echo "        ";
        } elseif ($this->getAttribute($this->getContext($context, "collector"), "enabled")) {
            // line 11
            echo "            not authenticated
        ";
        } else {
            // line 13
            echo "            disabled
        ";
        }
        // line 15
        echo "    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 16
        echo "    ";
        $this->env->loadTemplate("WebProfilerBundle:Profiler:toolbar_item.html.twig")->display(array_merge($context, array("link" => $this->getContext($context, "profiler_url"))));
    }

    // line 19
    public function block_menu($context, array $blocks = array())
    {
        // line 20
        echo "<span class=\"label\">
    <span class=\"icon\"><img src=\"";
        // line 21
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/images/profiler/security.png"), "html", null, true);
        echo "\" alt=\"\" /></span>
    <strong>Security</strong>
</span>
";
    }

    // line 26
    public function block_panel($context, array $blocks = array())
    {
        // line 27
        echo "    <h2>Security</h2>
    ";
        // line 28
        if ($this->getAttribute($this->getContext($context, "collector"), "user")) {
            // line 29
            echo "        <table>
            <tr>
                <th>Username</th>
                <td>";
            // line 32
            echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "collector"), "user"), "html", null, true);
            echo "</td>
            </tr>
            <tr>
                <th>Authenticated?</th>
                <td>
                    ";
            // line 37
            if ($this->getAttribute($this->getContext($context, "collector"), "authenticated")) {
                // line 38
                echo "                        yes
                    ";
            } else {
                // line 40
                echo "                        no ";
                if ((!twig_length_filter($this->env, $this->getAttribute($this->getContext($context, "collector"), "roles")))) {
                    echo "<em>(probably because the user has no roles)</em>";
                }
                // line 41
                echo "                    ";
            }
            // line 42
            echo "                </td>
            </tr>
            <tr>
                <th>Roles</th>
                <td>";
            // line 46
            echo twig_escape_filter($this->env, $this->env->getExtension('yaml')->encode($this->getAttribute($this->getContext($context, "collector"), "roles")), "html", null, true);
            echo "</td>
            </tr>
        </table>
    ";
        } elseif ($this->getAttribute($this->getContext($context, "collector"), "enabled")) {
            // line 50
            echo "        <p>
            <em>No token</em>
        </p>
    ";
        } else {
            // line 54
            echo "        <p>
            <em>The security component is disabled</em>
        </p>
    ";
        }
    }

    public function getTemplateName()
    {
        return "SecurityBundle:Collector:security.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  122 => 46,  116 => 42,  108 => 40,  102 => 37,  70 => 20,  51 => 11,  26 => 3,  150 => 43,  135 => 54,  94 => 32,  85 => 28,  61 => 17,  47 => 11,  34 => 5,  157 => 55,  133 => 49,  130 => 48,  113 => 41,  104 => 38,  90 => 36,  79 => 28,  62 => 16,  59 => 15,  32 => 6,  29 => 4,  24 => 3,  81 => 26,  73 => 21,  56 => 14,  54 => 13,  48 => 10,  45 => 9,  42 => 10,  36 => 8,  332 => 137,  329 => 136,  323 => 135,  321 => 134,  314 => 133,  310 => 132,  306 => 130,  304 => 129,  301 => 128,  298 => 127,  296 => 126,  288 => 124,  286 => 123,  282 => 121,  276 => 117,  238 => 99,  236 => 98,  231 => 95,  229 => 94,  224 => 91,  222 => 90,  217 => 87,  213 => 85,  203 => 81,  201 => 80,  196 => 77,  194 => 76,  189 => 73,  183 => 69,  180 => 68,  177 => 67,  175 => 66,  170 => 56,  161 => 58,  158 => 57,  156 => 56,  145 => 49,  142 => 48,  126 => 39,  123 => 35,  120 => 37,  118 => 36,  114 => 34,  103 => 28,  97 => 38,  92 => 37,  72 => 17,  66 => 19,  52 => 13,  69 => 21,  63 => 10,  58 => 16,  37 => 12,  20 => 1,  139 => 47,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 35,  96 => 34,  91 => 31,  87 => 28,  84 => 27,  82 => 27,  75 => 26,  67 => 19,  57 => 15,  50 => 12,  44 => 10,  39 => 8,  33 => 7,  30 => 4,  27 => 6,  271 => 114,  262 => 111,  258 => 110,  255 => 109,  250 => 108,  248 => 107,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 83,  200 => 87,  185 => 75,  178 => 71,  171 => 67,  164 => 59,  154 => 45,  151 => 53,  143 => 49,  140 => 52,  137 => 51,  132 => 43,  129 => 50,  125 => 36,  119 => 34,  111 => 33,  109 => 36,  106 => 35,  100 => 39,  95 => 30,  89 => 29,  86 => 27,  83 => 26,  80 => 25,  77 => 24,  74 => 21,  71 => 21,  68 => 20,  65 => 18,  60 => 16,  55 => 13,  49 => 6,  46 => 13,  43 => 12,  41 => 9,  38 => 8,  35 => 7,  31 => 4,  28 => 3,);
    }
}
