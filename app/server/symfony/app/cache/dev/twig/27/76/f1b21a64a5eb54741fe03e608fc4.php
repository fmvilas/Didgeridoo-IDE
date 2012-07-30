<?php

/* WebProfilerBundle:Collector:events.html.twig */
class __TwigTemplate_2776f1b21a64a5eb54741fe03e608fc4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("WebProfilerBundle:Profiler:layout.html.twig");

        $this->blocks = array(
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
        // line 3
        $context["__internal_2776f1b21a64a5eb54741fe03e608fc4_1"] = $this;
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\"><img src=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/webprofiler/images/profiler/events.png"), "html", null, true);
        echo "\" alt=\"Events\" /></span>
    <strong>Events</strong>
</span>
";
    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        // line 13
        echo "    <h2>Called Listeners</h2>

    <table>
        <tr>
            <th>Event name</th>
            <th>Listener</th>
        </tr>
        ";
        // line 20
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getContext($context, "collector"), "calledlisteners"));
        foreach ($context['_seq'] as $context["_key"] => $context["listener"]) {
            // line 21
            echo "            <tr>
                <td><code>";
            // line 22
            echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "listener"), "event"), "html", null, true);
            echo "</code></td>
                <td><code>";
            // line 23
            echo $context["__internal_2776f1b21a64a5eb54741fe03e608fc4_1"]->getdisplay_listener($this->getContext($context, "listener"));
            echo "</code></td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['listener'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        // line 26
        echo "    </table>

    ";
        // line 28
        if ($this->getAttribute($this->getContext($context, "collector"), "notcalledlisteners")) {
            // line 29
            echo "        <h2>Not Called Listeners</h2>

        <table>
            <tr>
                <th>Event name</th>
                <th>Listener</th>
            </tr>
            ";
            // line 36
            $context["listeners"] = $this->getAttribute($this->getContext($context, "collector"), "notcalledlisteners");
            // line 37
            echo "            ";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable(twig_sort_filter(twig_get_array_keys_filter($this->getContext($context, "listeners"))));
            foreach ($context['_seq'] as $context["_key"] => $context["listener"]) {
                // line 38
                echo "                <tr>
                    <td><code>";
                // line 39
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($this->getContext($context, "listeners"), $this->getContext($context, "listener"), array(), "array"), "event"), "html", null, true);
                echo "</code></td>
                    <td><code>";
                // line 40
                echo $context["__internal_2776f1b21a64a5eb54741fe03e608fc4_1"]->getdisplay_listener($this->getAttribute($this->getContext($context, "listeners"), $this->getContext($context, "listener"), array(), "array"));
                echo "</code></td>
                </tr>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['listener'], $context['_parent'], $context['loop']);
            $context = array_merge($_parent, array_intersect_key($context, $_parent));
            // line 43
            echo "        </table>
    ";
        }
    }

    // line 47
    public function getdisplay_listener($listener = null)
    {
        $context = $this->env->mergeGlobals(array(
            "listener" => $listener,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 48
            echo "    ";
            if (($this->getAttribute($this->getContext($context, "listener"), "type") == "Closure")) {
                // line 49
                echo "        Closure
    ";
            } elseif (($this->getAttribute($this->getContext($context, "listener"), "type") == "Function")) {
                // line 51
                echo "        ";
                $context["link"] = $this->env->getExtension('code')->getFileLink($this->getAttribute($this->getContext($context, "listener"), "file"), $this->getAttribute($this->getContext($context, "listener"), "line"));
                // line 52
                echo "        ";
                if ($this->getContext($context, "link")) {
                    echo "<a href=\"";
                    echo twig_escape_filter($this->env, $this->getContext($context, "link"), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "listener"), "function"), "html", null, true);
                    echo "</a>";
                } else {
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "listener"), "function"), "html", null, true);
                }
                // line 53
                echo "    ";
            } elseif (($this->getAttribute($this->getContext($context, "listener"), "type") == "Method")) {
                // line 54
                echo "        ";
                $context["link"] = $this->env->getExtension('code')->getFileLink($this->getAttribute($this->getContext($context, "listener"), "file"), $this->getAttribute($this->getContext($context, "listener"), "line"));
                // line 55
                echo "        ";
                echo $this->env->getExtension('code')->abbrClass($this->getAttribute($this->getContext($context, "listener"), "class"));
                echo "::";
                if ($this->getContext($context, "link")) {
                    echo "<a href=\"";
                    echo twig_escape_filter($this->env, $this->getContext($context, "link"), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "listener"), "method"), "html", null, true);
                    echo "</a>";
                } else {
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "listener"), "method"), "html", null, true);
                }
                // line 56
                echo "    ";
            }
        } catch(Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ob_get_clean();
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Collector:events.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 55,  133 => 49,  130 => 48,  113 => 43,  104 => 40,  90 => 36,  79 => 28,  62 => 22,  59 => 21,  32 => 6,  29 => 5,  24 => 3,  81 => 29,  73 => 23,  56 => 14,  54 => 13,  48 => 10,  45 => 9,  42 => 8,  36 => 5,  332 => 137,  329 => 136,  323 => 135,  321 => 134,  314 => 133,  310 => 132,  306 => 130,  304 => 129,  301 => 128,  298 => 127,  296 => 126,  288 => 124,  286 => 123,  282 => 121,  276 => 117,  238 => 99,  236 => 98,  231 => 95,  229 => 94,  224 => 91,  222 => 90,  217 => 87,  213 => 85,  203 => 81,  201 => 80,  196 => 77,  194 => 76,  189 => 73,  183 => 69,  180 => 68,  177 => 67,  175 => 66,  170 => 56,  161 => 58,  158 => 57,  156 => 56,  145 => 49,  142 => 48,  126 => 39,  123 => 38,  120 => 37,  118 => 36,  114 => 34,  103 => 28,  97 => 38,  92 => 37,  72 => 17,  66 => 23,  52 => 13,  69 => 21,  63 => 10,  58 => 9,  37 => 12,  20 => 1,  139 => 47,  131 => 44,  128 => 43,  121 => 40,  115 => 39,  107 => 36,  99 => 35,  96 => 34,  91 => 33,  87 => 32,  84 => 29,  82 => 20,  75 => 26,  67 => 20,  57 => 15,  50 => 12,  44 => 10,  39 => 8,  33 => 5,  30 => 4,  27 => 6,  271 => 114,  262 => 111,  258 => 110,  255 => 109,  250 => 108,  248 => 107,  235 => 107,  228 => 103,  221 => 99,  214 => 95,  207 => 83,  200 => 87,  185 => 75,  178 => 71,  171 => 67,  164 => 59,  154 => 54,  151 => 53,  143 => 49,  140 => 52,  137 => 51,  132 => 43,  129 => 43,  125 => 42,  119 => 47,  111 => 33,  109 => 36,  106 => 35,  100 => 39,  95 => 30,  89 => 22,  86 => 27,  83 => 26,  80 => 25,  77 => 27,  74 => 21,  71 => 20,  68 => 19,  65 => 18,  60 => 16,  55 => 20,  49 => 6,  46 => 13,  43 => 12,  41 => 9,  38 => 8,  35 => 7,  31 => 4,  28 => 3,);
    }
}
